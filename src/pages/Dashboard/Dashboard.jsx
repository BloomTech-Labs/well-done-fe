import React, { useState, useEffect } from 'react'
import Map from 'components/Map/Map.component'
import Search from 'components/Search/Search.component'
import IconsFilter from 'components/Filter/IconFilters'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchSensorsWithHistory,
  fetchSensorsByOrgId,
} from 'actions/sensorActions'
import { fetchHistory, fetchRecentHistory } from 'actions/sensorHistoryActions'

import Menu from 'components/Menu/Menu.component'
import './Dashboard.styles.scss'

const Dashboard = props => {
  const [viewport, setViewport] = useState({
    latitude: 13.004758,
    longitude: 105.784788,
    width: '100vw',
    height: '90vh',
    zoom: 2,
  })
  const sensorSelector = useSelector(state => state.sensorReducer)
  const historySelector = useSelector(state => state.historyReducer)

  const dispatch = useDispatch()

  const userRole = localStorage.getItem('role')
  const orgId = localStorage.getItem('org_id')

  dispatch({
    type: 'TOGGLE_NAV_STATE',
    payload: true,
  })
  // these booleans will control the filters of the map
  // will switch to false === won't render on map view
  // funcToggle = show all sensor that are functional aka status => 2
  const [funcToggle, setFuncToggle] = useState(true)
  // nonFuncToggle = show all sensor that are nonFunctional aka sensor status 0
  const [nonFuncToggle, setNonFuncToggle] = useState(true)
  // unknowToogle = show all sensor that status is unknown aka status 1
  const [unknownToggle, setUnknownToggle] = useState(true)

  useEffect(() => {
    const updateWidth = () => {
      setViewport({
        latitude: 13.5651,
        longitude: 104.7538,
        width: '100%',
        height: '90vh',
        zoom: 8,
        scrollZoom: false,
        boxZoom: false,
        doubleClickZoom: false,
      })
    }
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  })
  useEffect(() => {
    if (userRole === 'super_user') {
      dispatch(fetchSensorsWithHistory())
    } else {
      dispatch(fetchSensorsByOrgId(orgId))
    }
    dispatch(fetchHistory())
    dispatch(fetchRecentHistory())
  }, [])

  const zoomInto = () => {
    if (props.searchFiltered.length === 0) {
      setViewport({
        latitude: 13.5651,
        longitude: 105.7538,
        width: '100vw',
        height: '90vh',
        zoom: 8,
        scrollZoom: false,
        boxZoom: false,
        doubleClickZoom: false,
      })
    } else if (props.searchFiltered.length === 1) {
      const searchedPlace = {
        latitude: props.searchFiltered[0].latitude,
        longitude: props.searchFiltered[0].longitude,
        width: '100vw',
        height: '90vh',
        zoom: 11,
      }
      setViewport(searchedPlace)
    } else if (props.searchFiltered.length > 1) {
      function avgCoordinate(arr) {
        var totalLat = 0
        var totalLon = 0
        for (let i = 0; i < arr.length; i++) {
          totalLat += arr[i].latitude
          totalLon += arr[i].longitude
        }
        const avgLat = totalLat / arr.length
        const avgLon = totalLon / arr.length
        return [avgLat, avgLon]
      }
      const searchedPlace = {
        latitude: avgCoordinate(props.searchFiltered)[0],
        longitude: avgCoordinate(props.searchFiltered)[1],
        width: '100vw',
        height: '90vh',
        zoom: 11,
      }
      setViewport(searchedPlace)
    }
  }

  useEffect(() => {
    zoomInto()
  }, [props.searchFiltered])

  if (sensorSelector.sensors.length === 0) {
    return <div>loading...</div>
  }

  return (
    <div className='dashboard'>
      <Menu />
      <div className='mapSearchFilterContainer'>
        <Map
          sensors={sensorSelector.sensors}
          funcToggle={funcToggle}
          nonFuncToggle={nonFuncToggle}
          unknownToggle={unknownToggle}
          viewport={viewport}
          setViewport={setViewport}
          history={historySelector.history}
          selectedPump={props.selectedPump}
        />
        {/* <Banner /> */}
        <Search
          sensors={sensorSelector.sensors}
          searchFiltered={props.searchFiltered}
          setSearchFiltered={props.setSearchFiltered}
          viewport={viewport}
          setViewport={setViewport}
        />
        <div className='filterContainer'>
          <IconsFilter
            sensors={sensorSelector.sensors}
            setFuncToggle={setFuncToggle}
            setNonFuncToggle={setNonFuncToggle}
            setUnknownToggle={setUnknownToggle}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

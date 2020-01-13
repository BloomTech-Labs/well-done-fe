import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Map from '../components/Map/Map.component'
import Search from '../components/Search/Search.component'
import Filter from '../components/Filter/Filter.component'
import IconsFilter from '../components/Filter/IconFilters'
import Sensors from '../components/DashBoardComponents/Sensors'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSensors } from '../actions/sensorActions'
import { fetchHistory } from '../actions/sensorHistory'
import OrgGrid from 'components/DashBoardComponents/orgGrid/orgGrid'
import OrganizationActivity from '../components/DashBoardComponents/OrganizationActivity'
import Testing from '../components/DashBoardComponents/Sensors'
import AccountGrid from '../components/Grid/AccountGrid'
import Banner from './Banner'
import StaticMenu from '../components/Menu/StaticMenu.js'
import Menu from '../components/Menu/Menu.component'
import './Dashboard.styles.scss'

const Dashboard = props => {
  const [viewport, setViewport] = useState({
    latitude: 13.004758,
    longitude: 105.784788,
    width: '100%',
    height: '720px',
    zoom: 2,
  })

  const sensorSelector = useSelector(state => state.sensorReducer)
  const historySelector = useSelector(state => state.historyReducer)
  const dispatch = useDispatch()

  console.log(sensorSelector)

  dispatch({
    type: 'TOGGLE_NAV_STATE',
    payload: true,
  })
  const [funcToggle, setFuncToggle] = useState(true)
  const [nonFuncToggle, setNonFuncToggle] = useState(true)
  const [unknownToggle, setUnknownToggle] = useState(true)

  useEffect(() => {
    const updateWidth = () => {
      setViewport({
        latitude: 13.5651,
        longitude: 104.7538,
        width: window.innerWidth - 20,
        height: '720px',
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
    dispatch(fetchSensors())
    dispatch(fetchHistory())
  }, [])

  const zoomInto = () => {
    if (props.searchFiltered.length == 0) {
      setViewport({
        latitude: 13.5651,
        longitude: 104.7538,
        width: '100%',
        height: '720px',
        zoom: 8,
        scrollZoom: false,
        boxZoom: false,
        doubleClickZoom: false,
      })
    } else if (props.searchFiltered.length == 1) {
      const searchedPlace = {
        latitude: props.searchFiltered[0].latitude,
        longitude: props.searchFiltered[0].longitude,
        width: '100%',
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
        height: '100vh',
        zoom: 11,
      }
      setViewport(searchedPlace)
    }
  }

  useEffect(() => {
    zoomInto()
  }, [props.searchFiltered])

  // if (sensorSelector.sensors.length === 0) {
  //   return <div>loading...</div>
  // }

  console.log(sensorSelector)

  return (
    <div className='dashboard'>
      <Menu/>
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
          setSelectedPump={props.setSelectedPump}
        />
        <Banner />
        <Search
          searchFiltered={props.searchFiltered}
          setSearchFiltered={props.setSearchFiltered}
          viewport={viewport}
          setViewport={setViewport}
          sensors={sensorSelector.sensors}
        />
        <div className='filterContainer'>
          <IconsFilter
            sensors={sensorSelector.sensors}
            setFuncToggle={setFuncToggle}
            setNonFuncToggle={setNonFuncToggle}
            setUnknownToggle={setUnknownToggle}
          />
        </div>

        {/* <Filter
          searchFiltered={props.searchFiltered}
          setSearchFiltered={props.setSearchFiltered}
          sensors={sensorSelector.sensors}
          setFuncToggle={setFuncToggle}
          setUnknownToggle={setUnknownToggle}
        /> */}
      </div>
      <div className='tables-container'>
        <div className='orgActPumps'>
          <OrganizationActivity
            alertInfo={historySelector.alertInfo}
            selectedPump={props.selectedPump}
            setSelectedPump={props.setSelectedPump}
            sensors={sensorSelector.sensors}
          />

          <Sensors
            gridInfo={sensorSelector.gridInfo}
            selectedPump={props.selectedPump}
            setSelectedPump={props.setSelectedPump}
          />
        </div>
        <OrgGrid />
        <AccountGrid />
      </div>
    </div>
  )
}

export default Dashboard

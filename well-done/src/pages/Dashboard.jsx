import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu/Menu.component'
import Map from '../components/Map/Map.component'
import Search from '../components/Search/Search.component'
import Filter from '../components/Filter/Filter.component'
import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'
import {connect} from 'react-redux'
import {fetchSensors} from '../actions/sensorActions'

const Dashboard = props => {

  console.log('props in Dashboard', props)
  const [viewport, setViewport] = useState({
    latitude: 13.004758,
    longitude: 105.784788,
    width: '100vw',
    height: '100vh',
    zoom: 2,
    // center: [13.043945, 105.221241]

  })
  const [funcToggle, setFuncToggle] = useState(true)
  const [nonFuncToggle, setNonFuncToggle] = useState(true)
  const [unknownToggle, setUnknownToggle] = useState(true)
  const [history, setHistory] = useState([])

  // useEffect(() => {
  //   AxiosWithAuth()
  //     .get(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent`)
  //     .then(res => {
  //       console.log('get all sensors in Map', res.data)
  //       // props.setSensors(res.data);
  //       setSensorInDashboard(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])



  useEffect(()=>{
    props.fetchSensors()
  },[])

  console.log(props.sensors,'this is the sensors')

  useEffect(() => {
    AxiosWithAuth()
      .get(`${process.env.REACT_APP_HEROKU_API}/api/history`)
      .then(res => {
        //console.log("history from app.js", res.data);
        setHistory(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])





  const zoomInto = () => {
    // console.log('checkkk', props.searchFiltered.length)
    // props.searchFiltered[0].map(place => {
    if (props.searchFiltered.length == 0) {
      setViewport({
        latitude: 13.5651,
        longitude: 104.7538,
        width: '100vw',
        height: '100vh',
        zoom: 8,
      })
    } else if (props.searchFiltered.length == 1) {
      const searchedPlace = {
        latitude: props.searchFiltered[0].latitude,
        longitude: props.searchFiltered[0].longitude,
        width: '100vw',
        height: '100vh',
        zoom: 11,
      }
      //   console.log('searchPlace one', searchedPlace)
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
      console.log('searchPlace many', searchedPlace)
      setViewport(searchedPlace)
    }
  }

  useEffect(() => {
    zoomInto()
  }, [props.searchFiltered])

  if(!props.sensors){
    return <div>
           loading...
       </div>
  }

  return (
    <div class='dashboard'>
      <Menu history={props.history} />
      <Map
        // sensors = {props.sensors}
        sensors={props.sensors}
        // setSensors = {props.setSensors}
        funcToggle={funcToggle}
        nonFuncToggle={nonFuncToggle}
        unknownToggle={unknownToggle}
        viewport={viewport}
        setViewport={setViewport}
        history={history}
        selectedPump={props.selectedPump}
        setSelectedPump={props.setSelectedPump}
      />
      <Search
        searchFiltered={props.searchFiltered}
        setSearchFiltered={props.setSearchFiltered}
        viewport={viewport}
        setViewport={setViewport}
        sensors={props.sensors}
      />
      <Filter
        searchFiltered={props.searchFiltered}
        setSearchFiltered={props.setSearchFiltered}
        // sensors = {props.sensors}
        sensors={props.sensors}
        setFuncToggle={setFuncToggle}
        setNonFuncToggle={setNonFuncToggle}
        setUnknownToggle={setUnknownToggle}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    sensors: state.sensor.sensors,
    isFetching: state.sensor.isFetching,
    error: state.sensor.error,
  }
}


export default connect(mapStateToProps, {fetchSensors})(Dashboard)

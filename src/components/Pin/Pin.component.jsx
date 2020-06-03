import React from 'react'
import { Marker } from 'react-map-gl'
import NewMapMarkerFunctioning from 'icons/NewMapMarkerFunctioning.svg'
import NewMapMarkerNonFunctioning from 'icons/NewMapMarkerNonFunctioning.svg'
import NewMapMarkerNoData from 'icons/NewMapMarkerNoData.svg'
import { handleSelected, CLEAR_SELECTED } from 'actions/selectedSensorsActions'
import { useDispatch, useSelector } from 'react-redux'
function Pin(props) {
  const dispatch = useDispatch()

  const handleClick = async sensor => {
    if (props.currentlySelected) {
      await dispatch({ type: CLEAR_SELECTED })
    }
    await dispatch(handleSelected(sensor))
  }

  const recentHistory = useSelector(state => state.historyReducer.recentHistory)

  console.log(recentHistory[props.sensors[0].physical_id], props.sensors)
  return (
    <div>
      {props.sensors.map(sensor => {
        console.log(recentHistory[sensor.physical_id])
        if (sensor.status === null && props.nonFuncToggle) {
          return (
            <Marker
              key={sensor.sensor_id}
              latitude={sensor.latitude}
              longitude={sensor.longitude}
            >
              <img
                onClick={() => handleClick(sensor)}
                className='location-icon'
                src={NewMapMarkerNonFunctioning}
                alt='location'
              />
            </Marker>
          )
        } else if (sensor.status === 0 && props.nonFuncToggle) {
          return (
            <Marker
              key={sensor.sensor_id}
              latitude={sensor.latitude}
              longitude={sensor.longitude}
            >
              <img
                onClick={() => handleClick(sensor)}
                className='location-icon'
                src={NewMapMarkerNonFunctioning}
                alt='location'
              />
            </Marker>
          )
        } else if (
          recentHistory[sensor.physical_id] === 'no' &&
          props.unknownToggle
        ) {
          return (
            <Marker
              key={sensor.sensor_id}
              latitude={sensor.latitude}
              longitude={sensor.longitude}
            >
              <img
                onClick={() => handleClick(sensor)}
                className='location-icon'
                src={NewMapMarkerNoData}
                alt='location'
              />
            </Marker>
          )
        } else if (
          recentHistory[sensor.physical_id] === 'yes' &&
          props.funcToggle
        ) {
          return (
            <Marker
              key={sensor.sensor_id}
              latitude={sensor.latitude}
              longitude={sensor.longitude}
            >
              <img
                onClick={() => handleClick(sensor)}
                className='location-icon'
                src={NewMapMarkerFunctioning}
                alt='location'
              />
            </Marker>
          )
        }
      })}
    </div>
  )
}

export default Pin

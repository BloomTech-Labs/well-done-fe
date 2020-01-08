import React from 'react'
import { Marker } from 'react-map-gl'
import NewMapMarkerFunctioning from '../../icons/NewMapMarkerFunctioning.svg'
import NewMapMarkerNonFunctioning from '../../icons/NewMapMarkerNonFunctioning.svg'
import NewMapMarkerNoData from '../../icons/NewMapMarkerNoData.svg'

function Pin(props) {
  return (
    <div>
      {props.sensors.map(sensor => {
        if (sensor.status == null && props.nonFuncToggle) {
          return (
            <Marker
              key={sensor.sensor_id}
              latitude={sensor.latitude}
              longitude={sensor.longitude}
            >
              <img
                onClick={event => {
                  event.preventDefault()
                  props.setSelectedPump(sensor)
                }}
                className='location-icon'
                src={NewMapMarkerNonFunctioning}
                alt='location'
              />
            </Marker>
          )
        } else if (sensor.status == 0 && props.nonFuncToggle) {
          return (
            <Marker
              key={sensor.sensor_id}
              latitude={sensor.latitude}
              longitude={sensor.longitude}
            >
              <img
                onClick={event => {
                  event.preventDefault()
                  props.setSelectedPump(sensor)
                }}
                className='location-icon'
                src={NewMapMarkerNonFunctioning}
                alt='location'
              />
            </Marker>
          )
        } else if (sensor.status == 1 && props.unknownToggle) {
          return (
            <Marker
              key={sensor.sensor_id}
              latitude={sensor.latitude}
              longitude={sensor.longitude}
            >
              <img
                onClick={event => {
                  event.preventDefault()
                  props.setSelectedPump(sensor)
                }}
                className='location-icon'
                src={NewMapMarkerNoData}
                alt='location'
              />
            </Marker>
          )
        } else if (sensor.status == 2 && props.funcToggle) {
          return (
            <Marker
              key={sensor.sensor_id}
              latitude={sensor.latitude}
              longitude={sensor.longitude}
            >
              <img
                onClick={event => {
                  event.preventDefault()
                  props.setSelectedPump(sensor)
                }}
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

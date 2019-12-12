import React from 'react'
import { Marker } from 'react-map-gl'
import { connect } from 'react-redux'

function Pin(props) {
  console.log('props in Pin', props)

  if (!props.sensors) {
    return <div>Loading...</div>
  }

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
                src='https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png'
                alt='location'
              />
            </Marker>
          )
          // showMarker(sensor,"https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png")
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
                src='https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png'
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
                src='https://res.cloudinary.com/dfulxq7so/image/upload/v1573056729/Vector_q9ihvh.png'
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
                src='https://res.cloudinary.com/dfulxq7so/image/upload/v1573056725/Vector_1_xzgama.png'
                alt='location'
              />
            </Marker>
          )
        }
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sensors: state.sensor.sensors,
    isFetching: state.sensor.isFetching,
    error: state.sensor.error,
  }
}

export default connect(mapStateToProps, {})(Pin)

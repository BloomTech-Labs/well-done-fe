import React from 'react'
import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const SENSOR_FETCH = 'SENSOR_FETCH'
export const SENSOR_FAILURE = 'SENSOR_FAILURE'
export const SENSOR_SUCCESS = 'SENSOR_SUCCESS'

export const fetchSensors = () => dispatch => {
  dispatch({ type: SENSOR_FETCH })
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent`)
    .then(res => dispatch({ type: SENSOR_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: SENSOR_FAILURE, payload: err }))
}

export const UPDATE_INFO = 'UPDATE_INFO'
export const updateInfo = () => dispatch => {
  dispatch({ type: UPDATE_INFO })
}

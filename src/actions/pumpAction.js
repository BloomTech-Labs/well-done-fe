import React from 'react'
import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const PUMPS_FETCH = 'PUMPS_FETCH'
export const PUMPS_FAILURE = 'PUMPS_FAILURE'
export const PUMPS_SUCCESS = 'PUMPS_SUCCESS'
export const PUMP_POST = 'PUMP_POST'

export const fetchPumps = () => dispatch => {
  dispatch({ type: PUMPS_FETCH })
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/pumps`)
    .then(res => {
      dispatch({ type: PUMPS_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: PUMPS_FAILURE, payload: err }))
}

export const postPump = pump => dispatch => {
  dispatch({ type: PUMPS_FETCH })

  AxiosWithAuth()
    .post(`${process.env.REACT_APP_HEROKU_API}/api/pumps`, pump)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

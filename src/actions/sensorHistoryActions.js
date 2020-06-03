import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const HISTORY_FETCH = 'HISTORY_FETCH'
export const HISTORY_SUCCESS = 'HISTORY_SUCCESS'
export const HISTORY_FAILURE = 'HISTORY_FAILURE'
export const CHECK_DATE = 'CHECK_DATE'
export const RECENT_HISTORY = 'RECENT_HISTORY'
export const INDIVIDUAL_SENSOR_SUCCESS = 'INDIVIDUAL_SENSOR_SUCCESS'
export const CHECK_DATE_FOR_SENSOR_HISTORY = 'CHECK_DATE_FOR_SENSOR'
export const INDIVIDUAL_SENSOR_HISTORY_SUCCESS =
  'INDIVIDUAL_SENSOR_HISTORY_SUCCESS'

export const HISTORY_RECENT_FETCH = 'HISTORY_RECENT_FETCH'
export const HISTORY_RECENT_SUCCESS = 'HISTORY_RECENT_SUCCESS'
export const HISTORY_RECENT_FAILURE = 'HISTORY_RECENT_FAILURE'

export const fetchHistory = () => dispatch => {
  dispatch({
    type: HISTORY_FETCH,
  })

  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/history`)
    .then(res => dispatch({ type: HISTORY_SUCCESS, payload: res.data }))
    .then(res => dispatch({ type: CHECK_DATE }))
    .catch(err => dispatch({ type: HISTORY_FAILURE, payload: err }))
}

export const fetchRecentHistory = () => dispatch => {
  dispatch({
    type: HISTORY_RECENT_FETCH,
  })

  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/history/recent`)
    .then(res => dispatch({ type: HISTORY_RECENT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: HISTORY_RECENT_FAILURE, payload: err }))
}

export const fetchHistoryById = sensorId => dispatch => {
  dispatch({
    type: HISTORY_FETCH,
  })

  AxiosWithAuth()
    .get(
      `${process.env.REACT_APP_HEROKU_API}/api/history/sensor_id/${sensorId}`
    )
    .then(res =>
      dispatch({ type: INDIVIDUAL_SENSOR_HISTORY_SUCCESS, payload: res.data })
    )
    .then(res => dispatch({ type: CHECK_DATE_FOR_SENSOR_HISTORY }))
    .catch(err => dispatch({ type: HISTORY_FAILURE, payload: err }))
}

export const fetchSensorById = sensorId => dispatch => {
  dispatch({
    type: HISTORY_FETCH,
  })

  AxiosWithAuth()
    .get(
      `${process.env.REACT_APP_HEROKU_API}/api/sensors/recent/sensor_id/${sensorId}`
    )
    .then(res =>
      dispatch({ type: INDIVIDUAL_SENSOR_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: HISTORY_FAILURE, payload: err }))
}

import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const SENSOR_FETCH = 'SENSOR_FETCH'
export const SENSOR_FAILURE = 'SENSOR_FAILURE'
export const SENSOR_SUCCESS = 'SENSOR_SUCCESS'
export const UPDATE_INFO = 'UPDATE_INFO'
export const SENSOR_POST = 'SENSOR_POST'

export const SENSOR_DELETE = 'SENSOR_DELETE'

export const fetchSensors = () => dispatch => {
  dispatch({ type: SENSOR_FETCH })
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent`)
    .then(res => dispatch({ type: SENSOR_SUCCESS, payload: res.data }))
    .then(res => dispatch({ type: UPDATE_INFO }))
    .catch(err => dispatch({ type: SENSOR_FAILURE, payload: err }))
}

//  posting sensors
export const postSensor = sensors => dispatch => {
  dispatch({
    type: SENSOR_FETCH,
  })

  AxiosWithAuth()
    .post(`${process.env.REACT_APP_HEROKU_API}/api/sensors/`, sensors)
    .then(res => console.log(res))
    .catch(res => dispatch({ type: SENSOR_FAILURE, payload: res.data }))
}

//delete
export const deleteSensor = sensor_index => dispatch => {
  dispatch({ type: SENSOR_FETCH })
  AxiosWithAuth()
    .delete(`${process.env.REACT_APP_HEROKU_API}/api/sensors/${sensor_index}`)
    .then(res => {
      dispatch({ type: SENSOR_DELETE, payload: res.data })
      console.log(res.data)
    })
    .catch(res => dispatch({ type: SENSOR_FAILURE, payload: res.data }))
}

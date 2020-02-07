import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const SENSOR_FETCH = 'SENSOR_FETCH'
export const SENSOR_FAILURE = 'SENSOR_FAILURE'
export const SENSOR_SUCCESS = 'SENSOR_SUCCESS'
export const UPDATE_INFO = 'UPDATE_INFO'
export const SENSOR_POST = 'SENSOR_POST'
export const WITHOUT_HISTORY_SUCCESS = 'WITHOUT_HISTORY_SUCCESS'
export const UPDATE_INFO_WITHOUT_HISTORY = 'UPDATE_INFO_WITHOUT_HISTORY'
export const SENSOR_DELETE = 'SENSOR_DELETE'
export const SENSOR_SELECTED = 'SENSOR_SELECTED'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export const fetchSensorsWithHistory = () => dispatch => {
  dispatch({ type: SENSOR_FETCH })
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent`)
    .then(res => dispatch({ type: SENSOR_SUCCESS, payload: res.data }))
    .then(res => dispatch({ type: UPDATE_INFO }))
    .catch(err => dispatch({ type: SENSOR_FAILURE, payload: err }))
}

export const fetchSensorsWithOutHistory = () => dispatch => {
  dispatch({ type: SENSOR_FETCH })
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/sensors`)
    .then(res => dispatch({ type: WITHOUT_HISTORY_SUCCESS, payload: res.data }))
    .then(res => dispatch({ type: UPDATE_INFO_WITHOUT_HISTORY }))
    .catch(err => dispatch({ type: SENSOR_FAILURE, payload: err }))
}

export const fetchSensorsByOrgId = org_id => dispatch => {
  dispatch({ type: SENSOR_FETCH })
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent/${org_id}`)
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
    .then(res => dispatch({ type: UPDATE_INFO }))
    .catch(res => dispatch({ type: SENSOR_FAILURE, payload: res.data }))
}

export const postSensorNPump = (sensors, pumps) => dispatch => {
  dispatch({
    type: SENSOR_FETCH,
  })

  AxiosWithAuth()
    .post(`${process.env.REACT_APP_HEROKU_API}/api/sensors/SensorNPump`, [
      sensors,
      pumps,
    ])
    .then(res => dispatch({ type: SENSOR_POST, payload: res.data }))
    .then(res => dispatch({ type: UPDATE_INFO }))
    .catch(res => dispatch({ type: SENSOR_FAILURE, payload: res.data }))
}

//delete
export const deleteSensor = sensor_index => dispatch => {
  dispatch({ type: SENSOR_FETCH })
  AxiosWithAuth()
    .delete(`${process.env.REACT_APP_HEROKU_API}/api/sensors/${sensor_index}`)
    .then(res => dispatch({ type: SENSOR_DELETE, payload: res.data }))
    .catch(res => dispatch({ type: SENSOR_FAILURE, payload: res.data }))
}

//update Sensor Table
export const sensorSelected = finalList => dispatch => {
  dispatch({ type: SENSOR_SELECTED, payload: finalList })
}

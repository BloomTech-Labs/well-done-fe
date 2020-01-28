import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'
import { SENSOR_FAILURE } from './sensorActions'

export const SENSORSOPERATORS_FETCH = 'SENSORSOPERATORS_FETCH'
export const SENSORSOPERATORS_SUCCESS = 'SENSORSOPERATORS_SUCCESS'
export const SENSORSOPERATORS_FAILURE = 'SENSORSOPERATORS_FAILURE'

export const postSensorsOperators = matched => dispatch => {
    console.log(matched)
    AxiosWithAuth()
    .post(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent`)
    .then(res => dispatch({type: SENSORSOPERATORS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: SENSOR_FAILURE, payload: err}))
}
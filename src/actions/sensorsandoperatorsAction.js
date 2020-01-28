import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'
import { SENSOR_FAILURE } from './sensorActions'

export const SENSORSOPERATORS_FETCH = 'SENSORSOPERATORS_FETCH'
export const SENSORSOPERATORS_SUCCESS = 'SENSORSOPERATORS_SUCCESS'
export const SENSORSOPERATORS_FAILURE = 'SENSORSOPERATORS_FAILURE'

export const postSensorsOperators = ({sensor_pid, operator_id}) => dispatch => {
    const operatorId = operator_id.id

    const sensorOpArray = []
    sensor_pid.map(e => sensorOpArray.push({operator_id: operatorId, sensor_pid: e}))
  
    console.log(sensorOpArray)



  
    AxiosWithAuth()
    .post(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent`)
    .then(res => dispatch({type: SENSORSOPERATORS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: SENSOR_FAILURE, payload: err}))
}
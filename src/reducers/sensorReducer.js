import moment from 'moment'

import {
  SENSOR_FETCH,
  SENSOR_SUCCESS,
  SENSOR_FAILURE,
  UPDATE_INFO,
} from '../actions/sensorActions'

const initialState = {
  sensors: [],
  gridInfo: [],
  isFetching: false,
  error: '',
}

const sensorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SENSOR_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case SENSOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        sensors: action.payload,
      }
    case SENSOR_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case UPDATE_INFO: {
      return {
        ...state,
        gridInfo: state.sensors.map(item => {
          if (item.status === null) {
            return {
              ...item,
              status: 'N/A',
              created_at: moment(item.created_at).format('MM/DD/YYYY'),
            }
          } else if (item.status === 2) {
            return {
              ...item,
              status: 'Functioning',
              created_at: moment(item.created_at).format('MM/DD/YYYY'),
            }
          } else if (item.status === 1) {
            return {
              ...item,
              status: 'Non-Functioning',
              created_at: moment(item.created_at).format('MM/DD/YYYY'),
            }
          }
        }),
      }
    }
    default:
      return state
  }
}

export default sensorReducer

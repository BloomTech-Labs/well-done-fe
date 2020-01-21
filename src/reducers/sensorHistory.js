import moment from 'moment'

import {
  HISTORY_FETCH,
  HISTORY_SUCCESS,
  HISTORY_FAILURE,
  CHECK_DATE,
  CHECK_DATE_FOR_SENSOR_HISTORY,
  INDIVIDUAL_SENSOR_HISTORY_SUCCESS,
  INDIVIDUAL_SENSOR_SUCCESS,
} from '../actions/sensorHistory'

const initialState = {
  history: [],
  alertInfo: [],
  individualSensor: [],
  individualSensorHistory: [],
  isFetching: false,
  error: '',
}

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload,
        isFetching: false,
        error: '',
      }
    case HISTORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case CHECK_DATE:
      return {
        ...state,
        alertInfo: state.history.map(item => {
          return {
            ...item,
            created_at: moment(item.created_at).format('MM/DD/YYYY'),
          }
        }),
      }
    case INDIVIDUAL_SENSOR_SUCCESS:
      return {
        ...state,
        individualSensor: action.payload,
        isFetching: false,
        error: '',
      }
    case INDIVIDUAL_SENSOR_HISTORY_SUCCESS:
      return {
        ...state,
        individualSensorHistory: action.payload,
        isFetching: false,
        error: '',
      }
    case CHECK_DATE_FOR_SENSOR_HISTORY:
      return {
        ...state,
        individualSensorHistory: state.individualSensorHistory.map(item => {
          return {
            ...item,
            created_at: moment(item.created_at).format('MM/DD/YYYY'),
          }
        }),
      }
    default:
      return state
  }
}

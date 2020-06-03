import moment from 'moment'

import * as types from 'actions/sensorHistoryActions'

const initialState = {
  history: [],
  alertInfo: [],
  recentHistory: [],
  individualSensor: [],
  individualSensorHistory: [],
  isFetching: false,
  error: '',
}

export const sensorHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HISTORY_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case types.HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload,
        isFetching: false,
        error: '',
      }
    case types.HISTORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case types.CHECK_DATE:
      return {
        ...state,
        alertInfo: state.history.map(item => {
          return {
            ...item,
            created_at: moment(item.created_at).format('YYYY/MM/DD'),
          }
        }),
      }
    case types.HISTORY_RECENT_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case types.HISTORY_RECENT_SUCCESS:
      return {
        ...state,
        recentHistory: action.payload,
        isFetching: false,
        error: '',
      }
    case types.HISTORY_RECENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case types.INDIVIDUAL_SENSOR_SUCCESS:
      return {
        ...state,
        individualSensor: action.payload,
        isFetching: false,
        error: '',
      }
    case types.INDIVIDUAL_SENSOR_HISTORY_SUCCESS:
      return {
        ...state,
        individualSensorHistory: action.payload,
        isFetching: false,
        error: '',
      }
    case types.CHECK_DATE_FOR_SENSOR_HISTORY:
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

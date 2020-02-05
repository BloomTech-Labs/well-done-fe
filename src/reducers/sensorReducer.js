import moment from 'moment'
import * as types from 'actions/sensorActions'

const initialState = {
  sensors: [],
  isFiltered: false,
  filteredSensors: [],
  gridInfo: [],
  gridInfoWithOutHistory: [],
  isFetching: false,
  error: '',
}

const sensorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SENSOR_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case types.SENSOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        sensors: action.payload,
      }
    case types.SENSOR_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case types.SENSOR_DELETE:
      return {
        ...state,
        isFetching: false,
        gridInfo: state.gridInfo.filter(e => {
          if (e.sensor_index !== action.payload.id) {
            return e
          }
          return false
        }),
      }
    case types.FILTERED_SENSORS:
      return {
        ...state,
        isFetching: false,
        gridInfo: state.gridInfo.filter(e => {
          if (e.sensor_index !== action.payload.id) {
            return e
          }
          return false
        }),
        isFiltered: true,
        filteredSensors: action.payload,
      }
    case types.CLEAR_FILTER:
      return {
        ...state,
        isFiltered: false,
      }

    case types.UPDATE_INFO: {
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
    case types.SENSOR_POST: {
      return {
        ...state,
        gridInfoWithOutHistory: [
          ...state.gridInfoWithOutHistory,
          action.payload,
        ],
      }
    }
    case types.WITHOUT_HISTORY_SUCCESS: {
      return {
        ...state,
        gridInfoWithOutHistory: action.payload,
      }
    }
    case types.UPDATE_INFO_WITHOUT_HISTORY: {
      return {
        ...state,
        gridInfoWithOutHistory: state.gridInfoWithOutHistory.map(item => {
          return {
            ...item,
            date_finished: moment(item.date_finished).format('MM/DD/YYYY'),
          }
        }),
      }
    }
    default:
      return state
  }
}

export default sensorReducer

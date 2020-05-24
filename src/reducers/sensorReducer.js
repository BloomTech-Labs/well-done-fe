import moment from 'moment'
import * as types from 'actions/sensorActions'

const initialState = {
  sensors: [],
  isFiltered: false,
  visibilityFilter: 'SHOW_ALL',
  gridInfoWithOutHistory: [],
  isFetching: false,
  error: '',
  filterOptions: {
    func: true,
    non: true,
    na: true,
  },
  startDate: '',
  endDate: '',
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
        sensors: state.sensors.filter(e => {
          if (e.sensor_index !== action.payload.id) {
            return e
          }
          return false
        }),
      }

    case types.CLEAR_FILTER:
      return {
        ...state,
        isFiltered: false,
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
    // if visibilityFilter is filter_cal than we want to set it to use both cal & btns
    case 'SET_FILTER_OPTIONS':
      if (state.visibilityFilter === 'FILTER_CAL') {
        return {
          ...state,
          isFiltered: true,
          filterOptions: action.payload,
          visibilityFilter: 'FILTER_RAIDO_N_CAL',
        }
      }
      return {
        ...state,
        isFiltered: true,
        filterOptions: action.payload,
        visibilityFilter: 'FILTER_RADIO_BTNS',
      }
    case 'FILTER_RADIO_N_CAL':
      return {
        ...state,
        isFiltered: true,
        filterOptions: action.payload,
        visibilityFilter: 'FILTER_RAIDO_N_CAL',
      }
    case 'TOGGLE_FILTER':
      return {
        ...state,
        isFiltered: false,
      }
    case 'FILTER_CAL':
      return {
        ...state,
        isFiltered: true,
        visibilityFilter: action.payload.visibilityFilter,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      }
    case 'CHANGE_END_DATE':
      return {
        ...state,
        endDate: action.payload,
        visibilityFilter: 'FILTER_RADIO_BTNS',
      }
    default:
      return state
  }
}

export default sensorReducer

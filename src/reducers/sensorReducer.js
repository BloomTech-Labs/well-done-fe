import moment from 'moment'

import * as types from 'actions/sensorActions'

const initialState = {
  sensors: [],
  gridInfo: [],
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
            console.log(e)
            return e
          }
        }),
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
        sensors: [...state.sensors, action.payload],
      }
    }
    default:
      return state
  }
}

export default sensorReducer

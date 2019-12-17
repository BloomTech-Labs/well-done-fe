import moment from 'moment'

import {
  HISTORY_FETCH,
  HISTORY_SUCCESS,
  HISTORY_FAILURE,
} from '../actions/sensorHistory'

const initialState = {
  history: [],
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
        history: action.payload.map(item => {
          return {
            ...item,
            created_at: moment(item.created_at).format('MM/DD/YYYY'),
          }
        }),
        isFetching: false,
        error: '',
      }
    case HISTORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

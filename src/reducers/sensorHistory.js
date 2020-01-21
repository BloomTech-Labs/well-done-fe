import moment from 'moment'

import {
  HISTORY_FETCH,
  HISTORY_SUCCESS,
  HISTORY_FAILURE,
  CHECK_DATE,
  COMPARE_DATE,

} from '../actions/sensorHistory'

const initialState = {
  history: [],
  alertInfo: [],
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
    default:
      return state
  }
}

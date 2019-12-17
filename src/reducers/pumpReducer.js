import {
    PUMPS_FETCH,
    PUMPS_SUCCESS,
    PUMPS_FAILURE,
  } from '../actions/pumpAction'
  
  const initialState = {
    pumps: [],
    isFetching: false,
    error: '',
  }
  
  const pumpsReducer = (state = initialState, action) => {
    switch (action.type) {
      case PUMPS_FETCH:
        return {
          ...state,
          isFetching: true,
          error: '',
        }
      case PUMPS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: '',
          pumps: action.payload,
        }
      case PUMPS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        }
      default:
        return state
    }
  }
  
  export default pumpsReducer
  
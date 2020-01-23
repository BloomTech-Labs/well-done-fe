import * as types from 'actions/pumpAction'

const initialState = {
  pumps: [],
  isFetching: false,
  error: '',
}

const pumpsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PUMPS_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case types.PUMPS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        pumps: action.payload,
      }
    case types.PUMPS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case types.PUMPS_POST: {
      return {
        ...state,
        pumps: [...state.pumps, action.payload],
      }
    }
    default:
      return state
  }
}

export default pumpsReducer

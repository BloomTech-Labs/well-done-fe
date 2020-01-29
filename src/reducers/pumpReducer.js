import * as types from 'actions/pumpAction'

const initialState = {
  pumps: [],
  pumpsOrg: [],
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
    case types.PUMPSORG_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case types.PUMPSORG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        pumpsOrg: action.payload,
      }
    case types.PUMPSORG_FAILURE:
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

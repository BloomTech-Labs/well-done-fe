import {
  PUMPS_FETCH,
  PUMPS_SUCCESS,
  PUMPS_FAILURE,
  PUMPS_POST,
  PUMPSORG_FETCH,
  PUMPSORG_SUCCESS,
  PUMPSORG_FAILURE
} from '../actions/pumpAction'

const initialState = {
  pumps: [],
  pumpsOrg:[],
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
    case PUMPS_POST: {
      return {
        ...state,
        pumps: [...state.pumps, action.payload],
      }
    }
    case PUMPSORG_FETCH:
      return {
        ...state,
        isFetching:true,
      }
      case PUMPSORG_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: '',
          pumpsOrg: action.payload,
        }
      case PUMPSORG_FAILURE:
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

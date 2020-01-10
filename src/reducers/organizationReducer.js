import {
  ORG_FETCH,
  ORG_SUCCESS,
  ORG_FAILURE,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  ORG_ADD
} from '../actions/orgAction'


const initialState = {
  org: [],
  isFetching: false,
  error: '',
}

export const orgReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORG_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case ORG_SUCCESS:
      return {
        ...state,
        org: [...state.org, action.payload],
        isFetching: false,
        error: '',
      }
    case ORG_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
      case DELETE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          org: state.org.filter(e => { 
            if (e.id !== action.payload.id) {
              return e
            }
          }),
        }
        
    default:
      return state
  }
}

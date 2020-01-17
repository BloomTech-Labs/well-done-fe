import * as types from 'actions/orgAction'


const initialState = {
  org: [],
  isFetching: false,
  error: '',
}

export const orgReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORG_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case types.ORG_SUCCESS:
      return {
        ...state,
        org: action.payload,
        isFetching: false,
        error: '',
      }
    case types.ORG_ADD:
      return {
        ...state,
        org: [...state.org, action.payload],
        isFetching: false,
        error: '',
      }
    case types.ORG_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
      case types.DELETE_SUCCESS:
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

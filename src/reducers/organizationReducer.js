import {
  ORG_FETCH,
  ORG_SUCCESS,
  ORG_FAILURE,
  DELETE_SUCCESS,
  DELETE_FAILURE,
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
        org: action.payload,
        isFetching: false,
        error: '',
      }
    case ORG_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

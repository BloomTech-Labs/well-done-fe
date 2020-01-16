import {
  LOGIN_FETCH,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/signIn-action'

const initialState = {
  userInfo: {},
  isFetching: false,
  error: '',
}

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case LOGIN_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
      }
    case LOGIN_FAILURE:
      return {
        error: action.payload,
      }
    default:
      return state
  }
}
export default signInReducer

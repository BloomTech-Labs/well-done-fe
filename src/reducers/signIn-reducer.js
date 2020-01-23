import * as types from 'actions/signIn-action'

const initialState = {
  userInfo: {},
  isFetching: false,
  error: '',
}

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case types.LOGIN_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
      }
    case types.LOGIN_FAILURE:
      return {
        error: action.payload,
      }
    default:
      return state
  }
}
export default signInReducer

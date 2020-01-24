import * as types from 'actions/userActions'


const initialState = {
  user: {},
  isFetching: false,
  error: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case types.FETCHING_USER_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
      }
    case types.FETCHING_USER_FAILURE:
      return {
        error: action.payload,
      }
    case types.LOGIN_SUCCESS:
      return {
        user: action.payload,
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
export default userReducer

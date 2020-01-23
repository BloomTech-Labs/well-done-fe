import {
    FETCHING_USER_REQUEST,
    FETCHING_USER_SUCCESS,
    FETCHING_USER_FAILURE
    
  } from '../actions/userActions'
  
  const initialState = {
    user: {},
    isFetching: false,
    error: '',
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_USER_REQUEST:
        return {
          ...state,
          isFetching: true,
        }
      case FETCHING_USER_SUCCESS:
        return {
          user: action.payload,
          isFetching: false,
        }
      case FETCHING_USER_FAILURE:
        return {
          error: action.payload,
        }
      default:
        return state
    }
  }
  export default userReducer
  
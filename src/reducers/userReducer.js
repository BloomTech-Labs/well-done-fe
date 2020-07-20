import * as types from 'actions/userActions'

const initialState = {
  user: {},
  isFetching: false,
  error: '',
  initials: null,
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
        ...state,
        user: action.payload,
        isFetching: false,
      }
    case types.FETCHING_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
      }
    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case types.STARTING_INITIALS:
      let splitName = action.payload.split(' '),
        initial = splitName[0].substring(0, 1).toUpperCase()

      if (splitName.length > 1) {
        initial += splitName[splitName.length - 1].substring(0, 1).toUpperCase()
      }
      return {
        ...state,
        initials: initial,
      }
    case types.PASS_RESET_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          temp_pass: false,
        },
      }
    case 'EDIT_SUCCESS':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
export default userReducer

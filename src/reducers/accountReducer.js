import * as types from 'actions/accountAction'

const initialState = {
  accounts: [],
  isFetching: false,
  error: '',
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDOP_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case types.ADDOP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        //add to array of accounts
        accounts: [...state.accounts, action.payload],
      }
    case types.ADDOP_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case types.ACCOUNT_SUCCESS:
      return {
        ...state,
        accounts: action.payload,
      }

    case types.EDIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        accounts: state.accounts.map(e => {
          if (e.id === action.payload.id) {
            return (e = action.payload)
          } else {
            return e
          }
          console.log(`e`, e)
        }),
      }

    case types.DELETE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        accounts: state.accounts.filter(e => {
          if (e.id !== action.payload.id) {
            return e
          }
        }),
      }
    default:
      return state
  }
}
export default accountReducer

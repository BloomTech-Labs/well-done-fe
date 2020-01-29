import {
  ADDOPERATOR_FETCH,
  ADDOPERATOR_SUCCESS,
  ADDOPERATOR_FAILURE,
} from '../actions/accountAction'

const initialState = {
  operators: [],
  isFetching: false,
  error: ''
}

const operatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDOPERATOR_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case ADDOPERATOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        operators: action.payload,
      }
    case ADDOPERATOR_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
        return state
  }
}
export default operatorReducer

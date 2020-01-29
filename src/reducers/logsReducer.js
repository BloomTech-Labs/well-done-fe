import React from 'react'
import * as types from '../actions/logsActions'

const initialState = {
  logsData: [],
  isFetching: false,
  error: '',
}

export const logsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGS_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case types.LOGS_SUCCESS:
      return {
        ...state,
        logsData: action.payload,
        isFetching: false,
        error: '',
      }
    case types.LOGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case types.VIEW_SUCCESS:
      return {
        ...state,
        isFetching: false,
        logsData: state.logsData.map(e => {
          if (e.id === action.payload.id) {
            return (e = action.payload)
          } else {
            return e
          }
          console.log(`e`, e)
        }),
      }
    default:
      return state
  }
}

export default logsReducer

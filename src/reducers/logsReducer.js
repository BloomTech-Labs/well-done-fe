import React from 'react'
import * as types from '../actions/logsActions'
import moment from 'moment'

const initialState = {
  logsData: [],
  logsUpdate: [],
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
        }),
      }
    case types.UPDATE_DATA: {
      return {
        ...state,
        logsUpdate: state.logsData.map(item => {
          if (item.status === null) {
            return {
              ...item,
              status: 'N/A',
              date_filed: moment(item.date_filed).format('MM/DD/YYYY'),
              last_modified: moment(item.last_modified).format('MM/DD/YYYY'),
            }
          } else if (item.status === 2) {
            return {
              ...item,
              status: 'Functioning',
              date_filed: moment(item.date_filed).format('MM/DD/YYYY'),
              last_modified: moment(item.last_modified).format('MM/DD/YYYY'),
            }
          } else if (item.status === 1) {
            return {
              ...item,
              status: 'Non-Functioning',
              date_filed: moment(item.date_filed).format('MM/DD/YYYY'),
              last_modified: moment(item.last_modified).format('MM/DD/YYYY'),
            }
          }
        }),
      }
    }
    default:
      return state
  }
}

export default logsReducer

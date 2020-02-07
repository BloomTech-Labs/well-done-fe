import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const LOGS_FETCH = 'LOGS_FETCH'
export const LOGS_FAILURE = 'LOGS_FAILURE'
export const LOGS_SUCCESS = 'LOGS_SUCCESS'
export const UPDATE_LOG_REQUEST = 'UPDATE_LOG_REQUEST'
export const UPDATE_LOG_SUCCESS = 'UPDATE_LOG_SUCCESS'
export const UPDATE_LOG_FAILURE = 'UPDATE_LOG_FAILURE'

export const fetchLogs = () => dispatch => {
  dispatch({
    type: LOGS_FETCH,
  })

  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/logs`)
    .then(res => dispatch({ type: LOGS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: LOGS_FAILURE, payload: err }))
}

export const editLogs = logsData => dispatch => {
  const id = logsData.id
  dispatch({ type: UPDATE_LOG_REQUEST })
  AxiosWithAuth()
    .put(`${process.env.REACT_APP_HEROKU_API}/api/logs/${id}`, logsData)
    .then(res => dispatch({ type: UPDATE_LOG_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_LOG_FAILURE, payload: err }))
}

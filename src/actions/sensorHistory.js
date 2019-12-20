import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const HISTORY_FETCH = 'HISTORY_FETCH'
export const HISTORY_SUCCESS = 'HISTORY_SUCCESS'
export const HISTORY_FAILURE = 'HISTORY_FAILURE'
export const CHECK_DATE = 'CHECK_DATE'

export const fetchHistory = () => dispatch => {
  dispatch({
    type: HISTORY_FETCH,
  })

  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/history`)
    .then(res => dispatch({ type: HISTORY_SUCCESS, payload: res.data }))
    .then(res => dispatch({ type: CHECK_DATE }))
    .catch(err => dispatch({ type: HISTORY_FAILURE, payload: err }))
}



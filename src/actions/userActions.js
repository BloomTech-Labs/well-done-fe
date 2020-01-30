import axios from 'axios'

export const FETCHING_USER_REQUEST = 'FETCHING_USER_REQUEST'
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
export const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const fetchUser = user => dispatch => {
  dispatch({ type: FETCHING_USER_REQUEST })
  axios
    .get(`${process.env.REACT_APP_HEROKU_API}/api/accounts/theemail/${user}`)
    .then(res => {
      dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data })
      localStorage.setItem('userEmail', res.data.email_address)
      return
    })
    .catch(err => {
      console.log('error here', err)
      dispatch({ type: FETCHING_USER_FAILURE, payload: err })
    })
}
export const fetchLogin = (account, history) => dispatch => {
  dispatch({ type: LOGIN_FETCH })
  axios
    .post(`${process.env.REACT_APP_HEROKU_API}/api/auth/login`, account)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userId', res.data.id)
      localStorage.setItem('userType', res.data.user)
      localStorage.setItem('userEmail', res.data.email_address)
      localStorage.setItem('role', res.data.role)
      localStorage.setItem('org_id', res.data.org_id)
      history.push('/dashboard')
    })
    .catch(err => {
      console.log('error here', err)
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}

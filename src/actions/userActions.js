import axiosWithAuth from 'components/AxiosWithAuth/axiosWithAuth'
import axios from 'axios'
export const FETCHING_USER_REQUEST = 'FETCHING_USER_REQUEST'
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
export const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const STARTING_INITIALS = 'STARTING_INITIALS'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const PASS_RESET_SUCCESS = 'PASS_RESET_SUCCESS'

export const fetchUser = userId => dispatch => {
  dispatch({ type: FETCHING_USER_REQUEST })
  axiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/accounts/${userId}`)
    .then(res => {
      dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('error here', err)
      dispatch({ type: FETCHING_USER_FAILURE, payload: err })
    })
}

export const changePassword = ({ id, formData }) => async dispatch => {
  dispatch({ type: PASS_RESET_SUCCESS })
  const updatedPass = await axiosWithAuth().put(
    `${process.env.REACT_APP_HEROKU_API}/api/accounts/password/${id}`,
    {
      password: formData,
    }
  )
  // console.log(updatedPass, 'up')
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

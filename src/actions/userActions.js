import axios from 'axios'

export const FETCHING_USER_REQUEST = 'FETCHING_USER_REQUEST'
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
export const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'

export const fetchUser= (user) => dispatch => {
dispatch({ type:FETCHING_USER_REQUEST})
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
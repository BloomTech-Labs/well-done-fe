
import axios from 'axios'


export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const fetchLogin = (account, history)=> dispatch=> {
    
    dispatch({type:LOGIN_FETCH})
    axios
    .post(`${process.env.REACT_APP_HEROKU_API}/api/auth/login`, account)
    .then(res => {
        dispatch({type: LOGIN_SUCCESS, payload:res.data})
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userId", res.data.id)
        localStorage.setItem("userType", res.data.user)
        localStorage.setItem("userEmail", res.data.email_address)

        history.push('/dashboard')    
    })
    .catch(err => {
        console.log('error here', err)
        dispatch({type:LOGIN_FAILURE, payload:err})
    })

}

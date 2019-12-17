import React from 'react'
import axios from 'axios'


export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const fetchLogin = (account)=> dispatch=> {
    console.log(account)
    dispatch({type:LOGIN_FETCH})
    axios
    .post(`res sign in`, account)
    .then(res => {
        console.log(`${process.env.REACT_APP_HEROKU_API}/api/auth/login`,res.data)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userId", res.data.id)
        localStorage.setItem("userType", res.data.user)
        dispatch({type: LOGIN_SUCCESS, payload:res.data})
        
    })
    .catch(err => console.log(err.response))
}

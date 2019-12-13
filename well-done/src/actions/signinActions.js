import React from 'react'
import axios from 'axios'

export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const fetchLogin = (account)=> dispatch=> {
    dispatch({type:LOGIN_FETCH})
    axios
    .post("${process.env.REACT_APP_HEROKU_API}/api/auth/login", account)
    .then(res => {
        console.log("res")
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("useId", res.data.id)
        dispatch({type: LOGIN_SUCCESS, payload:res.data.id})
        
    })
    .catch(err => console.log(err.response))
}
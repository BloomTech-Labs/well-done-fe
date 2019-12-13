import React from 'react'
import axios from 'axios'

export const SIGNIN_FETCH = 'SIGNIN_FETCH'
export const SIGNIN_SUCCESS= 'SIGNIN_SUCCESS'
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE'

export const fetchSignIn = (account)=> dispatch=> {
    dispatch({type:SIGNIN_FETCH})
    axios
    .post("${process.env.REACT_APP_HEROKU_API}/api/auth/login", account)
    .then(res => {
        console.log("res")
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("useId", res.data.id)
        dispatch({type: SIGNIN_SUCCESS, payload:res.data.id})
        
    })
    .catch(err => console.log(err.response))
}
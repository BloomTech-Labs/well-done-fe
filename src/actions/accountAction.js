import React from 'react'
import AxiosWithAuth from "../components/AxiosWithAuth/axiosWithAuth";

export const ADDOP_FETCH = "ADDOP_FETCH";
export const ADDOP_SUCCESS = "ADDOP_SUCCESS";
export const ADDOP_FAILURE = "ADDOP_FAILURE";

export const EDIT_FAILURE = "EDIT_FAILURE"
export const EDIT_SUCCESS = "EDIT_SUCCESS"

export const ACCOUNT_SUCCESS = "ACCOUNT_SUCCESS"
export const ACCOUNT_FAILURE = "ACCOUNT_FAILURE"

export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_FAILURE = "DELETE_FAILURE"

export const fetchAccounts = () => dispatch => {
    AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/accounts`,)
    .then(res => dispatch({type: ACCOUNT_SUCCESS, payload:res.data}))
    .catch(err => dispatch({type: ACCOUNT_FAILURE}))
}

export const addOp = (operator) => dispatch => {

    dispatch({type: ADDOP_FETCH})

    AxiosWithAuth()
    .post(`${process.env.REACT_APP_HEROKU_API}/api/accounts`,operator)
    .then(res =>
        dispatch({type: ADDOP_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ADDOP_FAILURE, payload: err.response}))
}   

export const editAccount = account => dispatch => {
    const id = account.id
    console.log('action edit', account)
    AxiosWithAuth()
    .put(`${process.env.REACT_APP_HEROKU_API}/api/accounts/${id}`,account)
    .then(res => dispatch({type: EDIT_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: EDIT_FAILURE, payload: err.response}))
}

export const deleteAccount = account => dispatch => {
    AxiosWithAuth()
    .delete(`${process.env.REACT_APP_HEROKU_API}/api/accounts`,account)
    .then(res => dispatch({type: DELETE_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: DELETE_FAILURE, payload: err.response}))
}
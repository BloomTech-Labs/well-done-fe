import React from 'react'
import AxiosWithAuth from "../components/AxiosWithAuth/axiosWithAuth";

export const ADDORG_FETCH = "ADDORG_FETCH";
export const ADDORG_SUCCESS = "ADDORG_SUCCESS";
export const ADDORG_FAILURE = "ADDORG_FAILURE";

export const addOrg = (org) => dispatch => {
    console.log(`${process.env.REACT_APP_HEROKU_API}/api/orgs`,org)
    dispatch({type: ADDORG_FETCH})

    AxiosWithAuth()
    .post(``, org)
    .then(res =>
        dispatch({type: ADDORG_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ADDORG_FAILURE, payload: err.response}))
}   

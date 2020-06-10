import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const ADDACCOUNT_FETCH = 'ADDOP_FETCH'
export const ADDACCOUNT_SUCCESS = 'ADDOP_SUCCESS'
export const ADDACCOUNT_FAILURE = 'ADDOP_FAILURE'

export const EDIT_FAILURE = 'EDIT_FAILURE'
export const EDIT_SUCCESS = 'EDIT_SUCCESS'

export const ACCOUNT_SUCCESS = 'ACCOUNT_SUCCESS'
export const ACCOUNT_FAILURE = 'ACCOUNT_FAILURE'

export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAILURE = 'DELETE_FAILURE'

//goes to operatorReducer
export const ADDOPERATOR_FETCH = 'ADDOPERATOR_FETCH'
export const ADDOPERATOR_SUCCESS = 'ADDOPERATOR_SUCCESS'
export const ADDOPERATOR_FAILURE = 'ADDOPERATOR_FAILURE'

export const fetchAccounts = () => dispatch => {
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/accounts`)
    .then(res => dispatch({ type: ACCOUNT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ACCOUNT_FAILURE }))
}

export const fetchOrgAccounts = org_id => dispatch => {
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/accounts/org/${org_id}`)

    .then(res => dispatch({ type: ACCOUNT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ACCOUNT_FAILURE }))
}

export const addAccount = ({
  first_name,
  last_name,
  email_address,
  mobile_number,
  password,
  org_name,
  role,
}) => dispatch => {
  dispatch({ type: ADDACCOUNT_FETCH })

  AxiosWithAuth()
    .post(`${process.env.REACT_APP_HEROKU_API}/api/accounts`, {
      first_name,
      last_name,
      email_address,
      mobile_number,
      password,
      role,
      org_id: 1,
    })
    .then(res =>
      dispatch({
        type: ADDACCOUNT_SUCCESS,
        payload: { ...res.data, org_name: org_name },
      })
    )
    .catch(err => dispatch({ type: ADDACCOUNT_FAILURE, payload: err }))
}

export const addOperator = ({
  first_name,
  last_name,
  email_address,
  mobile_number,
  password,
  org_id,
}) => async dispatch => {
  let newoperator = {
    first_name: first_name,
    last_name: last_name,
    email_address: email_address,
    mobile_number: mobile_number,
    password: password,
    org_id: org_id,
  }

  let response = await AxiosWithAuth().post(
    `${process.env.REACT_APP_HEROKU_API}/api/operators`,
    newoperator
  )
  //goes to operatorReducer

  dispatch({ type: ADDOPERATOR_SUCCESS, payload: response.data })
  return response.data
}

export const editAccount = account => dispatch => {
  const id = account.id

  AxiosWithAuth()
    .put(`${process.env.REACT_APP_HEROKU_API}/api/accounts/${id}`, account)
    .then(res => dispatch({ type: EDIT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: EDIT_FAILURE, payload: err.response }))
}

export const deleteAccount = id => dispatch => {
  AxiosWithAuth()
    .delete(`${process.env.REACT_APP_HEROKU_API}/api/accounts/${id}`)
    .then(res => dispatch({ type: DELETE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err.response }))
}

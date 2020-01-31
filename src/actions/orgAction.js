import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'


export const ORG_FETCH = 'ORG_FETCH'
export const ORG_SUCCESS = 'ORG_SUCCESS'
export const ORG_FAILURE = 'ORG_FAILURE'
export const ORG_DELETE = "ORG_DELETE"
export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_FAILURE = "DELETE_FAILURE"
export const ORG_ADD = "ORG_ADD"
export const EDIT_FAILURE = 'EDIT_FAILURE'
export const EDIT_SUCCESS = 'EDIT_SUCCESS'
export const APPEND_SENSORS= 'APPEND_SENSORS'
export const FETCH_APPEND_SENSORS = "FETCH_APPEND_SENSORS"
export const APPEND_ACCOUNTS= 'APPEND_ACCOUNTS'
export const FETCH_APPEND_ACCOUNTS = "FETCH_APPEND_ACCOUNTS"





export const postOrg = organization => dispatch => {
  dispatch({
    type: ORG_FETCH,
  })

  AxiosWithAuth()
    .post(`${process.env.REACT_APP_HEROKU_API}/api/orgs`, organization)
    .then(res =>  dispatch({ type: ORG_ADD, payload: res.data  } ))
    .catch(res => dispatch({ type: ORG_FAILURE, payload: res.data }))
}

export const editOrg = organization => dispatch => {
  const id = organization.id
 
  AxiosWithAuth()
    .put(`${process.env.REACT_APP_HEROKU_API}/api/orgs/${id}`, organization)
    .then(res => dispatch({ type: EDIT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: EDIT_FAILURE, payload: err.response }))
}

//delete
export const deleteOrg = id => dispatch => {
  dispatch({ type: ORG_FETCH })
  AxiosWithAuth()
    .delete(`${process.env.REACT_APP_HEROKU_API}/api/orgs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data })
    })
    .catch(res => dispatch({ type: ORG_FAILURE, payload: res.data }))
}

//get
export const fetchOrg = () => dispatch => {
  dispatch({ type: ORG_FETCH })
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/orgs`)
    
    .then(res => {
      
      dispatch({ type: ORG_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: ORG_FAILURE, payload: err }))
}

//get
export const fetchSensorsByOrgId = org_id => dispatch => {
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent/${org_id}`)
    .then(res => dispatch({ type: APPEND_SENSORS, payload: {data:res.data, id:org_id} }))
    .catch(err => dispatch({ type: ORG_FAILURE, payload: err }))
}

//get
export const fetchOrgAccounts = org_id => dispatch => {
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/accounts/org/${org_id}`)
    .then(res => dispatch({ type: APPEND_ACCOUNTS, payload: {data:res.data, id:org_id} }))
    .catch(err => dispatch({ type: ORG_FAILURE }))
}
import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const ORG_FETCH = 'ORG_FETCH'
export const ORG_SUCCESS = 'ORG_SUCCESS'
export const ORG_FAILURE = 'ORG_FAILURE'
export const ORG_DELETE = "ORG_DELETE"
export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_FAILURE = "DELETE_FAILURE"

export const postOrg = (organization) => dispatch => {
    dispatch({
      type: ORG_FETCH,
    })
    
    AxiosWithAuth()
      .post(`${process.env.REACT_APP_HEROKU_API}/api/orgs` ,organization)
      .then(res => dispatch({type: ORG_SUCCESS, payload: res.data}))
      .catch(res => dispatch({type: ORG_FAILURE, payload: res.data}))
    }



    //delete
export const deleteOrg = id => dispatch => {
  dispatch({ type: ORG_FETCH })
  console.log(id)
  AxiosWithAuth()
    .delete(`${process.env.REACT_APP_STAGING}/api/orgs/${id}`)
    .then(res => {
      // dispatch({ type: ORG_DELETE, payload: res.data })
      console.log('this is the response ',res.data)
    })
    .catch(res => dispatch({ type: ORG_FAILURE, payload: res.data }))
}


//get 
export const fetchOrg = () => dispatch => {
  dispatch({type:ORG_FETCH})
  AxiosWithAuth()
  .get(`${process.env.REACT_APP_STAGING}/api/orgs`)
  .then(res => {dispatch({type:ORG_SUCCESS, payload: res.data})})
  .catch(err => dispatch({type:ORG_FAILURE, payload: err }))
}
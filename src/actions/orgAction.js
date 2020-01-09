import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const ORG_FETCH = 'ORG_FETCH'
export const ORG_SUCCESS = 'ORG_SUCCESS'
export const ORG_FAILURE = 'ORG_FAILURE'

export const EDIT_FAILURE = "EDIT_FAILURE"
export const EDIT_SUCCESS = "EDIT_SUCCESS"

export const postOrg = (organization) => dispatch => {
    dispatch({
      type: ORG_FETCH,
    })
    
    AxiosWithAuth()
      .post(`${process.env.REACT_APP_HEROKU_API}/api/orgs` ,organization)
      .then(res => dispatch({type: ORG_SUCCESS, payload: res.data}))
      .catch(res => dispatch({type: ORG_FAILURE, payload: res.data}))
    }

export const editOrg = organization => dispatch => {
  const id = organization.id
  console.log('action edit, organization')
  AxiosWithAuth()
  .put(`${process.env.REACT_APP_HEROKU_API}/api/orgs/${id}`, organization)
  .then(res => dispatch({type: EDIT_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: EDIT_FAILURE, payload: err.response}))
}
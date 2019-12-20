import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const ORG_FETCH = 'ORG_FETCH'
export const ORG_SUCCESS = 'ORG_SUCCESS'
export const ORG_FAILURE = 'ORG_FAILURE'

export const postOrg = () => dispatch => {
    dispatch({
      type: ORG_FETCH,
    })
    
    AxiosWithAuth()
      .post(`${process.env.REACT_APP_HEROKU_API}/api/orgs`)
      .then(res => dispatch({type: ORG_SUCCESS, payload: res.data}))
      .catch(res => dispatch({type: ORG_FAILURE, payload: res.data}))
    }
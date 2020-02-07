import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'

export const PUMPS_FETCH = 'PUMPS_FETCH'
export const PUMPS_FAILURE = 'PUMPS_FAILURE'
export const PUMPS_SUCCESS = 'PUMPS_SUCCESS'
export const PUMPS_POST = 'PUMPS_POST'

export const PUMPSORG_FETCH = 'PUMPSORG_FETCH'
export const PUMPSORG_FAILURE = 'PUMPSORG_FAILURE'
export const PUMPSORG_SUCCESS = 'PUMPSORG_SUCCESS'

export const fetchPumps = () => dispatch => {
  dispatch({ type: PUMPS_FETCH })
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/pumps`)
    .then(res => {
      dispatch({ type: PUMPS_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: PUMPS_FAILURE, payload: err }))
}

export const fetchPumpsOrgId = id => dispatch => {
  dispatch({ type: PUMPSORG_FETCH })
  AxiosWithAuth()
    .get(`${process.env.REACT_APP_HEROKU_API}/api/pumps/org/${id}`)
    .then(res => {
      dispatch({ type: PUMPSORG_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: PUMPS_FAILURE, payload: err }))
}

export const postPump = pump => dispatch => {
  dispatch({ type: PUMPS_FETCH })

  AxiosWithAuth()
    .post(`${process.env.REACT_APP_HEROKU_API}/api/pumps`, pump)
    .then(res => dispatch({ type: PUMPS_POST, payload: res.data }))
    .catch(res => dispatch({ type: PUMPS_FAILURE, payload: res.data }))
}

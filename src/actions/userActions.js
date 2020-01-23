import { axiosWithAuth } from "utils/axiosWithAuth"

export const FETCHING_USER_REQUEST = 'FETCHING_USER_REQUEST'
export const fetchUser=(user)=> dispatch => {
dispatch({ type:FETCHING_USER_REQUEST})
axios
.post(`${process.env.REACT_APP_HEROKU_API}`)

}
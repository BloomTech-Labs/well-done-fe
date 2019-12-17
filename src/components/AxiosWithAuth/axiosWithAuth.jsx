import axios from 'axios'

const AxiosWithAuth = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
}

export default AxiosWithAuth

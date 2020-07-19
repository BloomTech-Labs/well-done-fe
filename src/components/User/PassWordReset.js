import React, { useState, useEffect } from 'react'
import { changePassword } from 'actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

function PassWordReset() {
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const userId = useSelector(state => state.userReducer.user.id)
  const handleChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      changePassword({
        id: userId,
        formData: password,
      })
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={password}></input>
        <button type='submit'>Update PassWord</button>
      </form>
    </div>
  )
}

export default PassWordReset

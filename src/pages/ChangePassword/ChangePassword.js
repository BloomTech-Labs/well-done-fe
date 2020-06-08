import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const ChangePassword = () => {
  const user = useSelector(state => state.userReducer.user)

  const [formValues, setState] = useState({
    first: '',
    last: '',
    email: '',
    password: '',
    newpassword: '',
    confirmpassword: '',
  })

  const handleChange = e => {
    setState({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    // TODO
  }
  const {
    first,
    last,
    email,
    password,
    confirmpassword,
    newpassword,
  } = formValues
  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '20em',
        width: '50em',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit}
    >
      <label>
        First Name:
        <input
          type='text'
          name='first'
          value={first || user.first_name}
          onChange={e => handleChange(e)}
        />
      </label>
      <label>
        Last Name:
        <input
          type='text'
          name='last'
          value={last || user.last_name}
          onChange={e => handleChange(e)}
        />
      </label>
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={email || user.email_address}
          onChange={e => handleChange(e)}
        />
      </label>
      <label>
        Old Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={e => handleChange(e)}
        />
      </label>
      <label>
        New Password:
        <input
          type='password'
          name='newpassword'
          value={newpassword}
          onChange={e => handleChange(e)}
        />
      </label>
      <label>
        confirm Password:
        <input
          type='password'
          name='confirmpassword'
          value={confirmpassword}
          onChange={e => handleChange(e)}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'
import { useSelector } from 'react-redux'

import { Form, Input, InputNumber, Button } from 'antd'
import userReducer from 'reducers/userReducer'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

export const MyForm = () => {
  const user = useSelector(state => state.userReducer.user)

  const [formValues, setState] = useState({
    first: '',
    last: '',
    email: '',
  })

  // useEffect(() => {

  // }, [])
  const handleChange = e => {
    setState({ ...formValues, [e.target.name]: e.target.value })
  }
  const { first, last, email } = formValues

  return (
    <form>
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
      <button type='submit' value='Submit'>
        SAVE
      </button>
    </form>
  )
}

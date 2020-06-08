import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editAccount } from 'actions/accountAction'

export const MyForm = () => {
  const user = useSelector(state => state.userReducer.user)
  useEffect(() => {
    if (user.id) {
      setState({
        first: user.first_name || '',
        last: user.last_name || '',
        email: user.email_address || '',
      })
    }
  }, [user])
  const [formValues, setState] = useState({
    first: user.first_name || '',
    last: user.last_name || '',
    email: user.email_address || '',
  })

  const dispatch = useDispatch()

  const handleChange = e => {
    setState({ ...formValues, [e.target.name]: e.target.value })
  }
  const { first, last, email } = formValues

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      editAccount({
        id: user.id,
        first_name: first,
        last_name: last,
        email_address: email,
      })
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: '2px solid lightgray ',
        height: '16em',
        padding: '1em',
        marginTop: '2em',
        alignSelf: 'center',
        width: '30%',
      }}
    >
      <label className='settingLabel'>
        First Name:
        <input
          type='text'
          name='first'
          value={first}
          onChange={e => handleChange(e)}
        />
      </label>
      <label className='settingLabel'>
        Last Name:
        <input
          type='text'
          name='last'
          value={last}
          onChange={e => handleChange(e)}
        />
      </label>
      <label className='settingLabel'>
        Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={e => handleChange(e)}
        />
      </label>
      <button type='submit' value='Submit'>
        SAVE
      </button>
    </form>
  )
}

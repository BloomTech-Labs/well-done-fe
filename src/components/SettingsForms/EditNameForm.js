import React, { useState } from 'react'
import axiosWithAuth from '../AxiosWithAuth/axiosWithAuth.jsx'
import { Button, Form } from 'react-bootstrap'
import '../../pages/Settings/Settings.scss'

const EditNameForm = props => {
  const [account, setAccount] = useState({
    email_address: '',
    password: '',
    new_name: '',
    new_name_conf: '',
  })

  const handleChange = event => {
    setAccount({ ...account, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Checking if new name matches new name confirmation
    if (account.new_name !== account.new_name_conf) {
      alert('New name information must match')
      axiosWithAuth()
        .get(`${process.env.REACT_APP_HEROKU_API}/api/accounts`)
        .then(res => {
          console.log('res', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      isValidUserCredential(account).then(res => {
        console.log('response line', res)
      })
    }
  }

  async function isValidUserCredential(account) {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_HEROKU_API}/api/auth/login`, account)
      .then(res => {
        getUserData(res.data.id)
        localStorage.setItem('userId', res.data.id)
        return true
      })
      .catch(err => {
        console.log(err)
        return false
      })
  }

  const getUserData = accountID => {
    axiosWithAuth()
      .get(`${process.env.REACT_APP_HEROKU_API}/api/accounts/${accountID}`)
      .then(res => {
        var temp = res.data
        var nameSplit = account.new_name.split(' ')
        temp.first_name = nameSplit[0]
        temp.last_name = nameSplit[1]
        updateUserData(temp, accountID)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const updateUserData = (newData, accountID) => {
    axiosWithAuth()
      .put(
        `${process.env.REACT_APP_HEROKU_API}/api/accounts/${accountID}`,
        newData
      )
      .then(res => {
        localStorage.setItem('userId', res.data.id)
        return true
      })
      .catch(err => {
        console.log(err)
        return false
      })
  }

  return (
    <div className='form-container-name'>
      <div className='form-wrap'>
        <h1 className='update-header-name'> Change Name </h1>
      </div>
      <div>
        <div className='edit-form'>
          <Form onSubmit={handleSubmit}>
            {/* Email input  */}
            <Form.Group className='email-row'>
              <Form.Group className='form-group'>
                <Form.Label className='form-label'>Email </Form.Label>
                <Form.Control
                  className='input'
                  type='email'
                  name='email_address'
                  value={account.email_address}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* Password input  */}
              <Form.Group className='form-group'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className='input'
                  type='password'
                  name='password'
                  value={account.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Group>

            {/* New name input  */}
            <Form.Group className='row-2'>
              <Form.Group className='form-group'>
                <Form.Label>New Name</Form.Label>
                <Form.Control
                  className='input'
                  type='text'
                  name='new_name'
                  value={account.new_name}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* Confirm new name input  */}
              <Form.Group className='form-group'>
                <Form.Label>Confirm New Name</Form.Label>
                <Form.Control
                  className='input'
                  type='text'
                  name='new_name_conf'
                  value={account.new_name_conf}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Group>

            <Button
              id='name'
              variant='primary'
              type='submit'
              className='update-btn'
            >
              <div className='btn-text'>Change Name</div>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default EditNameForm

import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import './grid.scss'

import { Form } from 'react-bootstrap'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
  },
}))

//button on AccountGrid
const EditGrid = props => {
  const [account, setAccount] = useState([])

  //account id added automatically, needed to .put
  account.id = props.data.id

  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleChange = event => {
    setAccount({ ...account, [event.target.name]: event.target.value })
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.editAccount(account)
    setOpen(false)
    props.api.api.redrawRows()
  }

  const role = [
    {
      value: '',
      label: 'Please Select',
    },
    {
      value: 'super_user',
      label: 'Super User',
    },
    {
      value: 'org_user',
      label: 'Organization User',
    },
    {
      value: 'operator',
      label: 'operator',
    },
  ]

  return (
    <>
      <span className='btnCon'>
        <button
          style={{ height: 20, lineHeight: 0.5 }}
          onClick={e => handleOpen(e, props.data)}
          className='btn btn-info'
        >
          Edit
        </button>
      </span>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className='modalContent'>
            <div className='modalHeader'>
              <h3>Edit Account Info</h3>
            </div>
            <div className='col1'>
              <label htmlFor='First Name'>First Name</label>

              <input
                type='text'
                id='first_name'
                placeholder={props.data.first_name}
                name='first_name'
                value={account.first_name}
                onChange={handleChange}
              />

              <label htmlFor='Last Name'>Last Name</label>

              <input
                type='text'
                id='last_name'
                placeholder={props.data.last_name}
                name='last_name'
                value={account.last_name}
                onChange={handleChange}
              />

              <label htmlFor='Email'>Email</label>
              <input
                type='email'
                name='email_address'
                id='Email'
                placeholder={props.data.email_address}
                value={account.email_address}
                onChange={handleChange}
              />

              <label htmlFor='Role'>Role</label>
              <Form.Control
                as='select'
                name='role'
                value={account.role}
                onChange={handleChange}
              >
                {role.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>
              <label htmlFor='mobile number'>Mobile Number</label>
              <input
                type='string'
                name='mobile_number'
                id='mobile_number'
                placeholder={props.data.mobile_number}
                value={account.mobile_number}
                onChange={handleChange}
              />
            </div>
            <div className='col2Body'></div>
            <footer>
              <div className='buttonsCont'>
                <button
                  className='closeBtn'
                  variant='secondary'
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className='saveBtn'
                  variant='primary'
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </div>
            </footer>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default EditGrid

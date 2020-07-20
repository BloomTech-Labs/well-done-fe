import React, { useState, useEffect } from 'react'
import { changePassword } from 'actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

function PassWordReset() {
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
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

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#F4F4F6',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      width: '400px',
      borderRadius: '12px',
    },
  }))

  const classes = useStyles()

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={password}></input>
        <button type='submit'>Update PassWord</button>
      </form> */}

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <div className={classes.paper}>
            <div>
              <h2>
                <label className='orgHeader' htmlFor='password'>
                  Reset Password
                </label>

                <input
                  type='password'
                  placeholder='Password'
                  onChange={handleChange}
                  value={password}
                />
              </h2>

              <footer>
                <Button
                  style={{ fontSize: '1.3rem', marginTop: '1.3rem' }}
                  variant='contained'
                  color='primary'
                  type='Submit'
                  onClick={e => handleSubmit(e)}
                >
                  Reset Password
                </Button>
              </footer>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default PassWordReset

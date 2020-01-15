import React, { useState } from 'react'
import './orgView.scss'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    boxShadow: theme.shadows[5],
    display: 'flex',
  },
}))

//button on Organization Grid
const ViewOrgGrid = props => {
  const [organization, setOrg] = useState([])

  //organization id added automatically, needed to .put
  organization.id = props.data.id

  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleChange = event => {
    setOrg({ ...organization, [event.target.name]: event.target.value })
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.editOrg(organization)
    setOpen(false)
    props.api.api.redrawRows()
  }

  return (
    <>
      <span className='btnCon'>
        <button
          style={{ height: 20, lineHeight: 0.5 }}
          onClick={e => handleOpen(e, props.data)}
          className='btn btn-info'
        >
          View
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
          <div className={classes.paper}>
            <div className='orgProfCon'>
              <div className='ceoPic'> null </div>
              <div className='infoBox'>
            <h2>{props.data.org_name}</h2>
            <h4>founded:</h4>
            <h4>Base of Operations: {props.data.headquarter_city}</h4>
            <div className='ceoName'>
                <h2>Admin: </h2>
            </div>
            </div>

            <div className='contactInfo'>
            <footer>
                <button variant='secondary' onClick={handleClose}>
                  Close
                </button>
              </footer>
           </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default ViewOrgGrid

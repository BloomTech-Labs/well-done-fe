import React, { useState } from 'react'

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
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
  },
}))

//button on Organization Grid
const EditOrgGrid = props => {
  console.log(props)
  const [organization, setOrg] = useState([])
  console.log(`organization`, organization)

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

  const handleSubmit = (e) =>{
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
          <div className={classes.paper}>
            <div className='col1'>
              <h2>
                <label for='Organization'>Organization Name</label>
                <br></br>
                <input
                  type='text'
                  id='organization_name'
                  placeholder={props.data.org_name}
                  name='organization_name'
                    value={organization.org_name}
                    onChange={handleChange}
                />
              </h2>
              <h2>
                <label for='HqCity'>headquarter city</label>
                <br></br>
                <input
                  type='text'
                  id='headquarter_city'
                  placeholder={props.data.headquarter_city}
                  name='headquarter_city'
                  value={organization.headquarter_city}
                  onChange={handleChange}
                />
              </h2>
              <br></br>
              <footer>
                <button variant='secondary' onClick={handleClose}>
                  Close
                </button>
                <button variant='primary' onClick={handleSubmit}>
                  Save Changes
                </button>
              </footer>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default EditOrgGrid

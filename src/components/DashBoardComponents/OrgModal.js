import React, { useState } from 'react'

//need to change for pumps
import '../../components/modalOperator.scss'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { postOrg } from '../../actions/orgAction'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import add from '../../icons/AddButton.svg'
// import './Sensors.style.scss'
import './orgGrid/orgGrid.scss'

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
    width: '400px',
    borderRadius: '12px',
  },
}))

const OrgModal = props => {
  const [org, setOrg] = useState({
    org_name: '',
    headquarter_city: '',
  })

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleChange = event => {
    setOrg({ ...org, [event.target.name]: event.target.value })
  }

  //on submit add operator
  const handleSubmit = event => {
    event.preventDefault()
    props.postOrg(org) //will use addPumps
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button type='button' onClick={handleOpen} className='addOrg'>
        <img src={add} alt='download'></img>
      </button>

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
                <label className='orgHeader' htmlFor='Country'>
                  Create Organization
                </label>

                <label className='orgLabel' htmlFor='Country'>
                  Organization Name
                </label>

                <input
                  className='textInput'
                  type='text'
                  id='organization'
                  placeholder='Organization Name'
                  name='org_name'
                  value={org.org_name}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label className='hqLabel' htmlFor='Country'>
                  Headquarters
                </label>

                <input
                  className='textInput'
                  type='text'
                  id='headquarter_city'
                  placeholder='Headquarters'
                  name='headquarter_city'
                  value={org.headquarter_city}
                  onChange={handleChange}
                />
              </h2>

              <h2>
                <div className='CreateAccount'></div>
              </h2>

              <footer className='btnContainer'>
                <button
                  className='cancelBtn'
                  variant='secondary'
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className='createNgoBtn'
                  type='Submit'
                  onClick={e => handleSubmit(e)}
                >
                  Create NGO
                </button>
              </footer>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

const mapStateToProps = state => {
  return {
    orgReducer: state.orgReducer.org,
    org: state.org,
    isFetching: state.isFetching,
    error: state.error,
  }
}
export default connect(mapStateToProps, { postOrg })(withRouter(OrgModal))

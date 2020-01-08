import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
//will create addOrgAction
// import { fetchPumps } from '../../actions/pumpAction'

//will be changed to pumpsAction
// import { addOp } from '../actions/addOp-action'

//need to change for pumps
import '../../components/modalOperator.scss'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import { Dropdown, Form } from 'react-bootstrap'

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

const OrgModal = () => {
  const [org, setOrg] = useState([])
  console.log(org)

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleChange = event => {
    setOrg({ ...org, [event.target.name]: event.target.value })
  }

  const dispatch = useDispatch()

  //fetch 0rgs for dropdown menu
  //   useEffect(() => {
  //     dispatch(fetchPumps())
  //   }, [])

  //on submit add operator
  const handleSubmit = event => {
    event.preventDefault()
    // dispatch(addOp(operator)) //will use addPumps
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button className='button' type='button' onClick={handleOpen}>
        ++Organization
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
              {/* <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  Organization
                </Dropdown.Toggle>
                <Form.Control
                  as='select'
                  value={pump.org_id}
                  onChange={handleChange}
                >
                  {pumpsReducer.map(e => (
                    <React.Fragment>
                      <option key={e.id}>{e.org_id}</option>
                    </React.Fragment>
                  ))}
                </Form.Control> */}
              <h2>
                <label for='Country'>Organization</label>
                <br></br>
                <input
                  type='text'
                  id='organization'
                  placeholder='organization'
                  name='organization name'
                  value={org.organization}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label for='Country'>Headquarter City</label>
                <br></br>
                <input
                  type='text'
                  id='headquarter_city'
                  placeholder='headquarter_city'
                  name='city'
                  value={org.headquarter_city}
                  onChange={handleChange}
                />
              </h2>

              <br></br>

              <h2>
                <div className='CreateAccount'>
                  <button type='Submit' onClick={handleSubmit}>
                    Create Organization
                  </button>
                </div>
              </h2>
              <br></br>
              <footer>
                <button variant='secondary' onClick={handleClose}>
                  Close
                </button>
                <button variant='primary' onClick={handleClose}>
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
export default OrgModal

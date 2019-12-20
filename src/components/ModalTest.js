import React, {useState, useEffect} from 'react'

import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPumps } from '../actions/pumpAction'

import { addOp } from '../actions/addOp-action'

import './modalOperator.scss'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import {Dropdown, Form } from 'react-bootstrap'

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
    display:"flex",
  },
}))

const ModalOperator = () => {
  const [operator, setOperator] = useState([])
  console.log(operator)
  
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleChange = event => {
    setOperator({ ...operator, [event.target.name]: event.target.value })
  }

  const dispatch = useDispatch()

  //fetch pumps for dropdown menu
  useEffect(() => {
    dispatch(fetchPumps())
  }, [])

  const pumpsReducer = useSelector(state => state.pumpsReducer.pumps)
  console.log(pumpsReducer)

  //on submit add operator
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(addOp(operator))
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
        ++Account
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
          <div className="col1">
          <h2>
            <label for='Name'>First Name</label>
            <br></br>
            <input
              type='text'
              id='first_name'
              placeholder='first name'
              name='first_name'
              value={operator.first_name}
              onChange={handleChange}
            />
          </h2>

          <h2>
            <label for='Name'>Last Name</label>
            <br></br>
            <input
              type='text'
              id='last_name'
              placeholder='last_name'
              name='last_name'
              value={operator.last_name}
              onChange={handleChange}
            />
          </h2>
          <h2>
            <label for='Email'>Email</label>
            <br></br>
            <input
              type='email'
              name='email'
              id='Email'
              placeholder='email'
              value={operator.email}
              onChange={handleChange}
            />
          </h2>
         
          <h2>
            <label for='Password'>Password</label>
            <br></br>
            <input
              type='password'
              name='password'
              id='Password'
              placeholder='password'
              value={operator.password}
              onChange={handleChange}
            />
          </h2>
          </div>
          <div className="col2">
          <h2>
            <label for='Password'>Mobile Number</label>
            <br></br>
            <input
              type='string'
              name='mobile_number'
              id='mobile_number'
              placeholder='mobile_number'
              value={operator.mobile_number}
              onChange={handleChange}
            />
          </h2>
          <br></br>
         

          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            Sensor
          </Dropdown.Toggle>
          <Form.Control
            as='select'
            value={operator.selectedPumps}
            onChange={handleChange}
          >
            {pumpsReducer.map(e => (
              <React.Fragment>
                <option key={e.id}>{e.id}</option>
              </React.Fragment>
            ))}
          </Form.Control>
          <br></br>
          <br></br>

          <h2>
            <div className='CreateAccount'>
              <button type='Submit' onClick={handleSubmit}>
                Create Operator
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
export default ModalOperator

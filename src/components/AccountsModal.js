import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPumps, fetchPumpsOrgId } from '../actions/pumpAction'
import { postSensorsOperators } from '../actions/sensorsandoperatorsAction'

import { addAccount, addOperator } from '../actions/accountAction'

import './modalOperator.scss'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import add from '../icons/AddButton.svg'

import { Dropdown, Form } from 'react-bootstrap'

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

const ModalOperator = () => {
  const [operator, setOperator] = useState([])
  console.log(operator)

  const [sen_op, setSen_op]= useState([])

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleChange = event => {
    setOperator({ ...operator, [event.target.name]: event.target.value })
  }


  
  const handleChangeMultiple = event => {
    const { options } = event.target
    const value = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }

    setSen_op({ sensor_pid: value })
    console.log(`value`, value)
  }

  const dispatch = useDispatch()

  //get org_id from localStorage
  const organizationId = localStorage.getItem('org_id')
  operator.org_id = organizationId

  //fetch pumps for dropdown menu
  useEffect(() => {
    if (organizationId >= 1) {
      dispatch(fetchPumpsOrgId(organizationId))
    } else {
      dispatch(fetchPumps())
    }
  }, [])

  //on submit add operator
  const handleSubmit = event => {
    event.preventDefault()
    
    dispatch(postSensorsOperators(operator))
    dispatch()
    if (operator.role === 'operator') {
      dispatch(addOperator(operator))
    }
    dispatch(addAccount(operator))
    handleClose()
  }

  //organization & pumps options
  const [
    orgReducer,
    pumpsReducer,
  ] = useSelector(({ orgReducer, pumpsReducer }) => [
    orgReducer.org,
    pumpsReducer,
  ])

  const orgName = orgReducer.filter(e => e.id === Number(organizationId))

  let getOrgName = []
  if (organizationId >= 1) {
    getOrgName = orgName
  } else {
    getOrgName = orgReducer
  }

  //get array of pump numbers
  let sensorNums = []
  pumpsReducer.pumps.map(e => sensorNums.push(e.sensor_pid))

  //sensors by organization name
  let sensorByOrg = []
  pumpsReducer.pumpsOrg.map(e => sensorByOrg.push(e.sensor_pid))
  console.log(`sensorNums`, sensorByOrg)

  //display sensors
  let sensorDisplay = []
  if (organizationId >= 1) {
    sensorDisplay = sensorByOrg
  } else {
    sensorDisplay = sensorNums
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
      <button className='addAccount' type='button' onClick={handleOpen}>
        <img src={add} alt='add'></img>
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
          <div className='modalBody'>
            <div className='col1'>
              <div className='modalHeader'>
                <h3>Create Account</h3>

                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  Organization
                </Dropdown.Toggle>

                <Form.Control
                  as='select'
                  name='org_id'
                  value={operator.org_id}
                  onChange={handleChange}
                >
                  {getOrgName.map(org => (
                    <option key={org.id} value={org.id}>
                      {org.org_name}
                    </option>
                  ))}
                </Form.Control>
              </div>
              <label htmlFor='Name'>First Name</label>

              <input
                type='text'
                id='first_name'
                placeholder='first name'
                name='first_name'
                value={operator.first_name}
                onChange={handleChange}
              />
              <label htmlFor='Name'>Last Name</label>

              <input
                type='text'
                id='last_name'
                placeholder='last_name'
                name='last_name'
                value={operator.last_name}
                onChange={handleChange}
              />

              <label htmlFor='Role'>Role</label>
              <Form.Control
                as='select'
                name='role'
                value={operator.role}
                onChange={handleChange}
              >
                {role.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>

              <label htmlFor='Email'>Email</label>
              <input
                type='email'
                name='email_address'
                id='Email'
                placeholder='email'
                value={operator.email_address}
                onChange={handleChange}
              />

              <label htmlFor='Password'>Password</label>
              <br></br>
              <input
                type='password'
                name='password'
                id='Password'
                placeholder='password'
                value={operator.password}
                onChange={handleChange}
              />
              <label htmlFor='Password'>Mobile Number</label>
              <br></br>
              <input
                type='string'
                name='mobile_number'
                id='mobile_number'
                placeholder='mobile number'
                value={operator.mobile_number}
                onChange={handleChange}
              />
            </div>
            <div id='allSensors'>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Assign Sensor
              </Dropdown.Toggle>

              <Form.Control
                as='select'
                name='sensor_pid'
                value={operator.sensor_pid}
                onChange={handleChangeMultiple}
                multiple
              >
                {sensorDisplay.map(sensor => (
                  <option key={sensor} value={sensor}>
                    {sensor}
                  </option>
                ))}
              </Form.Control>
            </div>

            <div className='col2'>
              <button
                className='createAcct'
                type='Submit'
                onClick={e => handleSubmit(e)}
              >
                Create Account
              </button>
              <button
                className='cancelButton'
                variant='cancelButton'
                onClick={() => handleClose()}
              >
                Cancel
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}
export default ModalOperator

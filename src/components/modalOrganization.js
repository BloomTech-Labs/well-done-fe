import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Button, Modal, Dropdown } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { fetchPumps } from '../actions/pumpAction'

import { addOp } from '../actions/accountAction'

const Example = () => {
  const [operator, setOperator] = useState([])
  const [show, setShow] = useState(false)

  const handleChange = event => {
    setOperator({ ...operator, [event.target.name]: event.target.value })
  }

  const dispatch = useDispatch()

  //fetch pumps for dropdown menu
  useEffect(() => {
    dispatch(fetchPumps())
  })

  const pumpReducer = useSelector(state => state.sensorReducer)

  //on submit add operator
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(addOp(operator))
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Modal.Title>
        <h1>Operators</h1>
      </Modal.Title>
      <Button variant='primary' onClick={() => setShow(true)}>
        + Operator
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-40w'
      >
        <Modal.Title>
          <h1>Create Operator</h1>
        </Modal.Title>

        <Modal.Title>
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
        </Modal.Title>

        <Modal.Title>
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
        </Modal.Title>
        <Modal.Title>
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
        </Modal.Title>
        <Modal.Title>
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
        </Modal.Title>
        <Modal.Title>
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
        </Modal.Title>
        <br></br>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            Assign Pumps
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* {pumpReducer.map(e => {

              })} */}
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br></br>
        <Modal.Title>
          <div className='CreateAccount'>
            <button type='Submit' onClick={handleSubmit}>
              Create Operator
            </button>
          </div>
        </Modal.Title>
        <br></br>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

//    render(<Example />);
export default Example

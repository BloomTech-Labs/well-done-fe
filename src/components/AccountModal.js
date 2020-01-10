// import React, { useState, useEffect } from 'react'

// import { useSelector } from 'react-redux'

// //css
// import './modalOperator.scss'

// import { Button, Modal, Dropdown, Form, MenuItem } from 'react-bootstrap'

// import { useDispatch } from 'react-redux'
// import { fetchPumps } from '../actions/pumpAction'

// import { addOp } from '../actions/accountAction'

// const ModalOperator = () => {
//   const [operator, setOperator] = useState([])
//   console.log(operator)
//   const [show, setShow] = useState(false)

//   const handleChange = event => {
//     setOperator({ ...operator, [event.target.name]: event.target.value })
//   }

//   const dispatch = useDispatch()

//   //fetch pumps for dropdown menu
//   useEffect(() => {
//     dispatch(fetchPumps())
//   }, [])

//   const pumpsReducer = useSelector(state => state.pumpsReducer.pumps)
//   console.log(pumpsReducer)

//   //on submit add operator
//   const handleSubmit = event => {
//     event.preventDefault()
//     dispatch(addOp(operator))
//     handleClose()
//   }

//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)

//   return (
//     <>
//       <button variant='primary' onClick={() => setShow(true)}>
//         + Account
//       </button>

//       <Modal
//         show={show}
//         onHide={() => setShow(false)}
//         // dialogClassName='modal-40w'
//         animation={true}
//       >
//         <Modal.Title>
//           <h1>Create Operator</h1>
//         </Modal.Title>

//         <Modal.Title>
//           <label for='Name'>First Name</label>
//           <br></br>
//           <input
//             type='text'
//             id='first_name'
//             placeholder='first name'
//             name='first_name'
//             value={operator.first_name}
//             onChange={handleChange}
//           />
//         </Modal.Title>

//         <Modal.Title>
//           <label for='Name'>Last Name</label>
//           <br></br>
//           <input
//             type='text'
//             id='last_name'
//             placeholder='last_name'
//             name='last_name'
//             value={operator.last_name}
//             onChange={handleChange}
//           />
//         </Modal.Title>
//         <Modal.Title>
//           <label for='Email'>Email</label>
//           <br></br>
//           <input
//             type='email'
//             name='email'
//             id='Email'
//             placeholder='email'
//             value={operator.email}
//             onChange={handleChange}
//           />
//         </Modal.Title>

//         <Dropdown.Toggle variant='success' id='dropdown-basic'>
//           Role
//         </Dropdown.Toggle>
//         <Form.Control
//           as='select'
//           value={operator.role}
//           onChange={handleChange}
//         >
          
           
//               <option>super_user</option>
//               <option>org_adm</option>
//               <option>user</option>
//         </Form.Control>

//         <Modal.Title>
//           <label for='Password'>Password</label>
//           <br></br>
//           <input
//             type='password'
//             name='password'
//             id='Password'
//             placeholder='password'
//             value={operator.password}
//             onChange={handleChange}
//           />
//         </Modal.Title>
//         <Modal.Title>
//           <label for='Password'>Mobile Number</label>
//           <br></br>
//           <input
//             type='string'
//             name='mobile_number'
//             id='mobile_number'
//             placeholder='mobile_number'
//             value={operator.mobile_number}
//             onChange={handleChange}
//           />
//         </Modal.Title>
//         <br></br>

//         <FormControl variant="outlined" className={classes.formControl}>
//         <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
//           Age
//         </InputLabel>
//         <Select
//           labelId="demo-simple-select-outlined-label"
//           id="demo-simple-select-outlined"
//           value={age}
//           onChange={handleChange}
//           labelWidth={labelWidth}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>





//         <Dropdown.Toggle variant='success' id='dropdown-basic'>
//           Assign Sensor
//         </Dropdown.Toggle>
//         <Form.Control
//           as='select'
//           value={operator.selectedPumps}
//           onChange={handleChange}
//         >
//           {pumpsReducer.map(e => (
//             <React.Fragment>
//               <option key={e.id}>{e.id}</option>
//             </React.Fragment>
//           ))}
//         </Form.Control>
//         <br></br>
//         <br></br>

//         <Modal.Title>
//           <div className='CreateAccount'>
//             <button type='Submit' onClick={handleSubmit}>
//               Create Operator
//             </button>
//           </div>
//         </Modal.Title>
//         <br></br>
//         <Modal.Footer>
//           <Button variant='secondary' onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant='primary' onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   )
// }

// export default ModalOperator

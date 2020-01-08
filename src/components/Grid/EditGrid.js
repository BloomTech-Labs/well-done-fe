import React, {useState} from 'react'

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
      display:"flex",
    },
  }))




//button on AccountGrid
const EditGrid = props => {
    console.log(props)
    const classes = useStyles()

    const [open, setOpen] = useState(false)


    


    const handleOpen = ()=> {
         setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
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
      <div className="col1">
      <h2>
        <label for='Name'>First Name</label>
        <br></br>
        <input
          type='text'
          id='first_name'
          placeholder='first name'
          name='first_name'
         // value={operator.first_name}
          //onChange={handleChange}
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
        //   value={operator.last_name}
        //   onChange={handleChange}
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
        //   value={operator.email}
        //   onChange={handleChange}
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
        //   value={operator.password}
        //   onChange={handleChange}
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
        //   value={operator.mobile_number}
        //   onChange={handleChange}
        />
      </h2>
      <br></br>
     

      {/* <Dropdown.Toggle variant='success' id='dropdown-basic'>
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
        ))} */}
      {/* </Form.Control> */}
      <br></br>
      <br></br>

      <h2>
        <div className='CreateAccount'>
          {/* <button type='Submit' onClick={handleSubmit}>
            Create Operator
          </button> */}
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
export default EditGrid
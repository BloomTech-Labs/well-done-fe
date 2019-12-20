import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPumps } from '../../actions/pumpAction'

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

const PumpsModal = () => {
  const [pump, setPump] = useState([])
  console.log(pump)

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleChange = event => {
    setPump({ ...pump, [event.target.name]: event.target.value })
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
        ++Pump
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
              {/* org_id: 1,
				sensor_pid: 1234,
				country_name: '1st country',
				province_name: '1st province',
				district_name: '1st district',
				commune_name: '1st commune',
				latitude: 1.234,
				longitude: 2.345 */}

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
                  name='organization'
                  value={pump.organization}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label for='Country'>Sensor pid</label>
                <br></br>
                <input
                  type='text'
                  id='sensor_pid'
                  placeholder='sensor_pid'
                  name='sensor_pid'
                  value={pump.sensor_pid}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label for='Country'>Country</label>
                <br></br>
                <input
                  type='text'
                  id='country_name'
                  placeholder='country_name'
                  name='country_name'
                  value={pump.country_name}
                  onChange={handleChange}
                />
              </h2>

              <h2>
                <label for='Name'>Province</label>
                <br></br>
                <input
                  type='text'
                  id='province_name'
                  placeholder='Province'
                  name='province_name'
                  value={pump.province_name}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label for='Email'>District</label>
                <br></br>
                <input
                  type='text'
                  name='district'
                  id='district'
                  placeholder='District'
                  value={pump.district}
                  onChange={handleChange}
                />
              </h2>
            </div>
            <div className='col2'>
              <h2>
                <label for='Password'>Commune</label>
                <br></br>
                <input
                  type='text'
                  name='commune'
                  id='commune'
                  placeholder='Commune'
                  value={pump.commune_name}
                  onChange={handleChange}
                />
              </h2>

              <h2>
                <label for='Password'>latitude</label>
                <br></br>
                <input
                  type='float'
                  name='latitude'
                  id='latitude'
                  placeholder='latitude'
                  value={pump.latitude}
                  onChange={handleChange}
                />
              </h2>
              <br></br>
              <h2>
                <label for='Password'>longitude</label>
                <br></br>
                <input
                  type='float'
                  name='longitude'
                  id='longitude'
                  placeholder='longitude'
                  value={pump.longitude}
                  onChange={handleChange}
                />
              </h2>
              <br></br>

              <h2>
                <div className='CreateAccount'>
                  <button type='Submit' onClick={handleSubmit}>
                    Create Pump
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
export default PumpsModal

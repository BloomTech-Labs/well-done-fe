import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { fetchPumps } from '../../actions/pumpAction'

import './Sensors'

//will be changed to sensorsAction
import { postSensor } from '../../actions/sensorActions'
import { postPump } from '../../actions/pumpAction'

//need to change for sensors
import './Sensors.style.scss'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import add from '../../icons/AddButton.svg'

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
    overflowX: 'hidden',
    overflowX: 'scroll',
    width: '80%',
    height: '90%',
    display: 'flex',
    alignItems: 'space-around',
  },
}))

const PumpsModal = () => {
  const [pump, setPump] = useState([])
  const [sensor, setSensor] = useState([])

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleChangePump = event => {
    setPump({ ...pump, [event.target.name]: event.target.value })
  }

  const handleChangeSensor = event => {
    setSensor({ ...sensor, [event.target.name]: event.target.value })
  }

  const dispatch = useDispatch()

  //fetch pumps for dropdown menu
  useEffect(() => {
    dispatch(fetchPumps())
  }, [])

  //on submit add operator
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(postSensor(sensor))
    dispatch(postPump(pump))
    handleClose()
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button className='addSensor' type='button' onClick={handleOpen}>
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
          <div className={classes.paper}>
            <div className='col1'>
              <h2>
                <label for='Country'>Organization</label>
                <br></br>
                <input
                  type='text'
                  id='organization'
                  placeholder='organization'
                  name='organization'
                  value={pump.organization}
                  onChange={handleChangePump}
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
                  onChange={handleChangePump}
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
                  onChange={handleChangePump}
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
                  onChange={handleChangePump}
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
                  onChange={handleChangePump}
                />
              </h2>
              <h2>
                <label for='Password'>Commune</label>
                <br></br>
                <input
                  type='text'
                  name='commune'
                  id='commune'
                  placeholder='Commune'
                  value={pump.commune_name}
                  onChange={handleChangePump}
                />
              </h2>

              <h2>
                <label for='Password'>Latitude</label>
                <br></br>
                <input
                  type='number'
                  name='latitude'
                  id='latitude'
                  placeholder='latitude'
                  value={pump.latitude}
                  onChange={handleChangePump}
                />
              </h2>
              <br></br>
              <h2>
                <label for='Password'>Longitude</label>
                <br></br>
                <input
                  type='number'
                  name='longitude'
                  id='longitude'
                  placeholder='longitude'
                  value={pump.longitude}
                  onChange={handleChangePump}
                />
              </h2>

              <h2>
                <label for=''>Physical ID</label>
                <br></br>
                <input
                  type='number'
                  name='physical_id'
                  id='physical_id'
                  placeholder='physical_id'
                  value={sensor.physical_id}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Kind</label>
                <br></br>
                <input
                  type='text'
                  name='kind'
                  id='kind'
                  placeholder='kind'
                  value={sensor.kind}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Type</label>
                <br></br>
                <input
                  type='text'
                  name='type'
                  id='type'
                  placeholder='type'
                  value={sensor.type}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Cellular</label>
                <br></br>
                <input
                  type='number'
                  name='cellular'
                  id='cellular'
                  placeholder='cellular'
                  value={sensor.cellular}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Bluetooth</label>
                <br></br>
                <input
                  type='number'
                  name='bluetooth'
                  id='bluetooth'
                  placeholder='bluetooth'
                  value={sensor.bluetooth}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Training</label>
                <br></br>
                <input
                  type='text'
                  name='training'
                  id='training'
                  placeholder='training'
                  value={sensor.training}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Renmark</label>
                <br></br>
                <input
                  type='text'
                  name='remark'
                  id='remark'
                  placeholder='remark'
                  value={sensor.remark}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Date Finished</label>
                <br></br>
                <input
                  type='text'
                  name='date_finished'
                  id='date_finished'
                  placeholder='date_finished'
                  value={sensor.date_finished}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Depth</label>
                <br></br>
                <input
                  type='number'
                  name='depth'
                  id='depth'
                  placeholder='depth'
                  value={sensor.depth}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Yield</label>
                <br></br>
                <input
                  type='number'
                  name='yield'
                  id='yield'
                  placeholder='yield'
                  value={sensor.yield}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Static</label>
                <br></br>
                <input
                  type='number'
                  name='static'
                  id='static'
                  placeholder='static'
                  value={sensor.static}
                  onChange={handleChangeSensor}
                />
              </h2>
              <h2>
                <label for=''>Quality</label>
                <br></br>
                <input
                  type='text'
                  name='quality'
                  id='quality'
                  placeholder='quality'
                  value={sensor.quality}
                  onChange={handleChangeSensor}
                />
              </h2>
              <br></br>

              <div className='CreateAccount'>
                <button type='Submit' onClick={handleSubmit}>
                  Create Pump
                </button>
                <button variant='secondary' onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}
export default PumpsModal

import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchPumps } from '../../actions/pumpAction'

import './Sensors'

//will be changed to sensorsAction
import { postSensor } from '../../actions/sensorActions'
import { postPump } from '../../actions/pumpAction'

//need to change for sensors
import './sensorModal.scss'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import add from '../../icons/AddButton.svg'

import { Dropdown, Form } from 'react-bootstrap'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import './Sensors.style.scss'

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

  console.log(pump)

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleChangePump = event => {
    setPump({ ...pump, [event.target.name]: event.target.value })
  }

  const handleChangeSensor = event => {
    setSensor({ ...sensor, [event.target.name]: event.target.value })
  }

  const orgReducer = useSelector(state => state.orgReducer.org)

  const pumpsReducer = useSelector(state => state.pumpsReducer.pumps)

  //unique province names
  const villageArray = pumpsReducer.map(e => e.village_name)
  const villageName = [...new Set(villageArray)]

  //unique province names
  const provinceArray = pumpsReducer.map(e => e.province_name)
  const provinceName = [...new Set(provinceArray)]

  //unique district
  const districtArray = pumpsReducer.map(e => e.district_name)
  const districtName = [...new Set(districtArray)]

  //unique commune
  const communeArray = pumpsReducer.map(e => e.commune_name)
  const communeName = [...new Set(communeArray)]

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
          <div className='senModalWrap'>
            <div className='locationModal'>
              <h3>Location</h3>

              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Organization
              </Dropdown.Toggle>

              <Form.Control
                as='select'
                name='organization'
                value={pump.organization}
                onChange={handleChangePump}
              >
                {orgReducer.map(org => (
                  <option key={org.id} value={org.org_name}>
                    {org.org_name}
                  </option>
                ))}
              </Form.Control>

              <Autocomplete
                freeSolo
                id='free-solo-2-demo'
                disableClearable
                options={provinceName.map(option => option)}
                renderInput={params => (
                  <TextField
                    {...params}
                    name='province_name'
                    value={pump.province_name}
                    onSelect={handleChangePump}
                    label='Province'
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />

              <Autocomplete
                freeSolo
                id='free-solo-2-demo'
                disableClearable
                options={districtName.map(option => option)}
                renderInput={params => (
                  <TextField
                    {...params}
                    name='district_name'
                    value={pump.district_name}
                    onSelect={handleChangePump}
                    label='District'
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />

              <Autocomplete
                freeSolo
                id='free-solo-2-demo'
                disableClearable
                options={communeName.map(option => option)}
                renderInput={params => (
                  <TextField
                    {...params}
                    name='commune_name'
                    value={pump.commune_name}
                    onSelect={handleChangePump}
                    label='Commune Name'
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />

              <Autocomplete
                freeSolo
                id='free-solo-2-demo'
                disableClearable
                options={villageName.map(option => option)}
                renderInput={params => (
                  <TextField
                    {...params}
                    name='village_name'
                    value={pump.village_name}
                    onSelect={handleChangePump}
                    label='Village'
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />

              <div className='senInput'>
                <label for='labitude'>Latitude</label>

                <input
                  type='number'
                  name='latitude'
                  id='latitude'
                  placeholder='latitude'
                  value={pump.latitude}
                  onChange={handleChangePump}
                />
              </div>

              <div className='senInput'>
                <label for='longitude'>Longitude</label>

                <input
                  type='number'
                  name='longitude'
                  id='longitude'
                  placeholder='longitude'
                  value={pump.longitude}
                  onChange={handleChangePump}
                />
              </div>
            </div>

            <div className='senModal1'>
              <h3>Sensor</h3>
              <div className='senInput'>
                <label for='Country'>Sensor pid</label>

                <input
                  type='text'
                  id='sensor_pid'
                  placeholder='sensor_pid'
                  name='sensor_pid'
                  value={pump.sensor_pid}
                  onChange={handleChangePump}
                />
              </div>

              <div className='senInput'>
                <label for=''>Physical ID</label>

                <input
                  type='number'
                  name='physical_id'
                  id='physical_id'
                  placeholder='physical_id'
                  value={sensor.physical_id}
                  onChange={handleChangeSensor}
                />
              </div>
              <div className='senInput'>
                <label for=''>Kind</label>

                <input
                  type='text'
                  name='kind'
                  id='kind'
                  placeholder='kind'
                  value={sensor.kind}
                  onChange={handleChangeSensor}
                />
              </div>
              <div className='senInput'>
                <label for=''>Type</label>

                <input
                  type='text'
                  name='type'
                  id='type'
                  placeholder='type'
                  value={sensor.type}
                  onChange={handleChangeSensor}
                />
              </div>
              <div className='senInput'>
                <label for=''>Cellular</label>

                <input
                  type='number'
                  name='cellular'
                  id='cellular'
                  placeholder='cellular'
                  value={sensor.cellular}
                  onChange={handleChangeSensor}
                />
              </div>

              <div className='senInput'>
                <label for=''>Bluetooth</label>

                <input
                  type='number'
                  name='bluetooth'
                  id='bluetooth'
                  placeholder='bluetooth'
                  value={sensor.bluetooth}
                  onChange={handleChangeSensor}
                />
              </div>
              <div className='senInput'>
                <label for=''>Training</label>

                <input
                  type='text'
                  name='training'
                  id='training'
                  placeholder='training'
                  value={sensor.training}
                  onChange={handleChangeSensor}
                />
              </div>
            </div>
            <div className='senModal2'>
              <h3>Notes</h3>
              <div className='senInput'>
                <label for=''>Remark</label>

                <input
                  type='text'
                  name='remark'
                  id='remark'
                  placeholder='remark'
                  value={sensor.remark}
                  onChange={handleChangeSensor}
                />
              </div>
              <div className='senInput'>
                <label for=''>Date Finished</label>

                <input
                  type='text'
                  name='date_finished'
                  id='date_finished'
                  placeholder='date_finished'
                  value={sensor.date_finished}
                  onChange={handleChangeSensor}
                />
              </div>
              <div className='senInput'>
                <label for=''>Depth</label>

                <input
                  type='number'
                  name='depth'
                  id='depth'
                  placeholder='depth'
                  value={sensor.depth}
                  onChange={handleChangeSensor}
                />
              </div>

              <div className='senInput'>
                <label for=''>Yield</label>

                <input
                  type='number'
                  name='yield'
                  id='yield'
                  placeholder='yield'
                  value={sensor.yield}
                  onChange={handleChangeSensor}
                />
              </div>
              <div className='senInput'>
                <label for=''>Static</label>

                <input
                  type='number'
                  name='static'
                  id='static'
                  placeholder='static'
                  value={sensor.static}
                  onChange={handleChangeSensor}
                />
              </div>
              <div className='senInput'>
                <label for=''>Quality</label>

                <input
                  type='text'
                  name='quality'
                  id='quality'
                  placeholder='quality'
                  value={sensor.quality}
                  onChange={handleChangeSensor}
                />
              </div>

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

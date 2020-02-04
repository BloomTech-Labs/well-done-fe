import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchPumps } from '../../actions/pumpAction'

import './Sensors/Sensors'

//will be changed to sensorsAction
import { postSensor, postSensorNPump } from '../../actions/sensorActions'
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
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

  //redux useSelector
  const [
    orgReducer,
    pumpsReducer,
  ] = useSelector(({ orgReducer, pumpsReducer }) => [
    orgReducer.org,
    pumpsReducer.pumps,
  ])

  let villageArray = []
  let provinceArray = []
  let districtArray = []
  let communeArray = []

  for (let i = 0; i < pumpsReducer.length; i++) {
    // villageArray.push(pumpsReducer[i].village_name)
    provinceArray.push(pumpsReducer[i].province_name)
    districtArray.push(pumpsReducer[i].district_name)
    communeArray.push(pumpsReducer[i].commune_name)
  }

  // const villageName = [...new Set(villageArray)]
  const provinceName = [...new Set(provinceArray)]
  const districtName = [...new Set(districtArray)]
  const communeName = [...new Set(communeArray)]

  const dispatch = useDispatch()

  //fetch pumps for dropdown menu
  useEffect(() => {
    dispatch(fetchPumps())
  }, [])

  //on submit add operator
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(postSensorNPump(sensor, pump))
    handleModal()
  }

  const handleModal = () => {
    setOpen(!open)
  }

  const userRole = localStorage.getItem('role')

  const modalDisplay = () => {
    if (userRole === 'super_user') {
      return (
        <button id='addSensor' type='button' onClick={handleModal}>
          <img src={add} alt='add'></img>
        </button>
      )
    } else {
      return (
        <button id='none' type='button'>
          <img src={add} alt='add'></img>
        </button>
      )
    }
  }

  return (
    <>
      {modalDisplay()}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleModal}
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
                name='org_id'
                value={pump.org_id}
                onChange={handleChangePump}
              >
                {orgReducer.map(org => (
                  <option key={org.id} value={org.id}>
                    {org.org_name}
                  </option>
                ))}
              </Form.Control>
              <div className='senInput'>
                <label for='Country'>Country</label>

                <input
                  type='text'
                  id='country_name'
                  placeholder='country_name'
                  name='country_name'
                  value={pump.country_name}
                  onChange={handleChangePump}
                />
              </div>

              <div className='senInput'>
                <label for='Name'>Province</label>

                <input
                  type='text'
                  id='province_name'
                  placeholder='Province'
                  name='province_name'
                  value={pump.province_name}
                  onChange={handleChangePump}
                />
                <label htmlFor='Email'>District</label>
                <input
                  type='text'
                  name='district'
                  id='district'
                  placeholder='District'
                  value={pump.district}
                  onChange={handleChangePump}
                />
                <label htmlFor='Password'>Commune</label>
                <input
                  type='text'
                  name='commune'
                  id='commune'
                  placeholder='Commune'
                  value={pump.commune_name}
                  onChange={handleChangePump}
                />
              </div>
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
                <label htmlFor='longitude'>Longitude</label>
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
            {/* BEGIN SENSORS COLUMN */}
            <div className='senColumn'>
              <div className='senHeader'>Sensor</div>
              <div className='senInput'>
                <label htmlFor='sensor_pid'>Sensor pid</label>
                <input
                  type='text'
                  id='sensor_pid'
                  placeholder='sensor_pid'
                  name='sensor_pid'
                  value={pump.sensor_pid}
                  onChange={handleChangePump}
                />
                <label htmlFor='physical_id'>Physical ID</label>
                <input
                  type='number'
                  name='physical_id'
                  id='physical_id'
                  placeholder='physical_id'
                  value={sensor.physical_id}
                  onChange={handleChangeSensor}
                />
                <label htmlFor='kind'>Kind</label>
                <input
                  type='text'
                  name='kind'
                  id='kind'
                  placeholder='kind'
                  value={sensor.kind}
                  onChange={handleChangeSensor}
                />
                <label htmlFor='type'>Type</label>
                <input
                  type='text'
                  name='type'
                  id='type'
                  placeholder='type'
                  value={sensor.type}
                  onChange={handleChangeSensor}
                />
                <label htmlFor='cellular'>Cellular</label>
                <input
                  type='number'
                  name='cellular'
                  id='cellular'
                  placeholder='cellular'
                  value={sensor.cellular}
                  onChange={handleChangeSensor}
                />
                <label htmlFor='bluetooth'>Bluetooth</label>
                <input
                  type='number'
                  name='bluetooth'
                  id='bluetooth'
                  placeholder='bluetooth'
                  value={sensor.bluetooth}
                  onChange={handleChangeSensor}
                />
                <label htmlFor='training'>Training</label>
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
            {/* BEGIN NOTES COLUMN */}
            <div className='notesColumn'>
              <div className='notesHeader'>Notes</div>
              <div className='notesInput'>
                <label htmlFor='remark'>Remark</label>
                <input
                  type='text'
                  name='remark'
                  id='remark'
                  placeholder='remark'
                  value={sensor.remark}
                  onChange={handleChangeSensor}
                />
                <label htmlFor='completion_date'>Date Finished</label>

                <input
                  type='text'
                  name='date_finished'
                  id='date_finished'
                  placeholder='date_finished'
                  value={sensor.date_finished}
                  onChange={handleChangeSensor}
                />

                <label htmlFor='depth'>Depth</label>

                <input
                  type='number'
                  name='depth'
                  id='depth'
                  placeholder='depth'
                  value={sensor.depth}
                  onChange={handleChangeSensor}
                />

                <label htmlFor='yield'>Yield</label>

                <input
                  type='number'
                  name='yield'
                  id='yield'
                  placeholder='yield'
                  value={sensor.yield}
                  onChange={handleChangeSensor}
                />

                <label htmlFor='static'>Static</label>

                <input
                  type='number'
                  name='static'
                  id='static'
                  placeholder='static'
                  value={sensor.static}
                  onChange={handleChangeSensor}
                />

                <label htmlFor='quality'>Quality</label>
                <input
                  type='text'
                  name='quality'
                  id='quality'
                  placeholder='quality'
                  value={sensor.quality}
                  onChange={handleChangeSensor}
                />
              </div>
              <div className='buttonBox'>
                <button
                  className='submitBtn'
                  type='Submit'
                  onClick={handleSubmit}
                >
                  Create Pump
                </button>
                <button
                  className='closeBtn'
                  variant='secondary'
                  onClick={handleModal}
                >
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

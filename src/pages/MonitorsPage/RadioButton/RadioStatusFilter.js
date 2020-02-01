import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FILTERED_SENSORS, CLEAR_FILTER } from 'actions/sensorActions'
import gridOptionss from '../../../components/Grid/Pagination'

import './Radio.styles.scss'

function RadioStatusFilter(props) {
  const [selectedOptions, setSelectedOptions] = useState({
    func: false,
    non: false,
    na: false,
  })

  const dispatch = useDispatch()

  const handleClick = e => {
    let name = e.target.name
    setSelectedOptions({ ...selectedOptions, [name]: !selectedOptions[name] })
  }

  const handleSubmit = e => {
    e.preventDefault()
    let selected = props.gridInfo.filter(sensor => {
      if (selectedOptions.non === true) {
        if (sensor.status === 'Non-Functioning') {
          return sensor
        }
      }
      if (selectedOptions.func === true) {
        if (sensor.status === 'Functioning') {
          return sensor
        }
      }
      if (selectedOptions.na === true) {
        if (sensor.status === 'N/A') {
          return sensor
        }
      }
    })
    dispatch({ type: FILTERED_SENSORS, payload: selected })
  }

  const onClear = e => {
    e.preventDefault()
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <>
      <form className='checkboxes'>
        {/* <div className='checkboxes'> */}
        <input
          type='checkbox'
          id='func'
          value='Functioning'
          name='func'
          onClick={handleClick}
        />
        <p>Functioning</p>
        <input
          type='checkbox'
          id='non'
          value='Non-Functioning'
          name='non'
          onClick={handleClick}
        />
        <p>Non-Functioning</p>
        <input
          type='checkbox'
          id='na'
          value='n/a'
          name='na'
          onClick={handleClick}
        />
        <p>N/A</p>
        {/* </div> */}
        <div className='radioBtnContainer'>
          <input
            type='submit'
            onClick={e => handleSubmit(e)}
            className='btn submitRadio'
          />
          <button onClick={onClear} className='btn clearRadio'>
            Clear
          </button>
        </div>
      </form>
    </>
  )
}

export default RadioStatusFilter

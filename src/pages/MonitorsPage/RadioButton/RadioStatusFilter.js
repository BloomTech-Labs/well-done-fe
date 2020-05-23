import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import './Radio.styles.scss'

function RadioStatusFilter() {
  const selectedOptions = useSelector(
    state => state.sensorReducer.filterOptions
  )
  const startDate = useSelector(state => state.sensorReducer.startDate)
  const endDate = useSelector(state => state.sensorReducer.endDate)

  const dispatch = useDispatch()

  const handleClick = e => {
    let name = e.target.name
    // if cal both dates exists, we want to filter by both cal & radio_btns
    if (
      moment(startDate).format('MM/DD/YYYY') !== 'Invalid date' &&
      moment(endDate).format('MM/DD/YYYY') !== 'Invalid date'
    ) {
      dispatch({
        type: 'FILTER_RADIO_N_CAL',
        payload: { ...selectedOptions, [name]: !selectedOptions[name] },
      })
    } else {
      dispatch({
        type: 'SET_FILTER_OPTIONS',
        payload: { ...selectedOptions, [name]: !selectedOptions[name] },
      })
    }
  }

  return (
    <>
      <form className='checkboxes'>
        <input
          type='checkbox'
          id='func'
          value='Functioning'
          name='func'
          onClick={handleClick}
          checked
        />
        <p>Functioning</p>
        <input
          type='checkbox'
          id='non'
          value='Non-Functioning'
          name='non'
          onClick={handleClick}
          checked
        />
        <p>Non-Functioning</p>
        <input
          type='checkbox'
          id='na'
          value='n/a'
          name='na'
          onClick={handleClick}
          checked
        />
        <p>N/A</p>
      </form>
    </>
  )
}

export default RadioStatusFilter

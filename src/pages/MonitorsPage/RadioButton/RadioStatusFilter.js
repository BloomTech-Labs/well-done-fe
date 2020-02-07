import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Radio.styles.scss'

function RadioStatusFilter(props) {
  const selectedOptions = useSelector(
    state => state.sensorReducer.filterOptions
  )

  const dispatch = useDispatch()

  const handleClick = e => {
    let name = e.target.name
    dispatch({
      type: 'SET_FILTER_OPTIONS',
      payload: { ...selectedOptions, [name]: !selectedOptions[name] },
    })
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
      </form>
    </>
  )
}

export default RadioStatusFilter

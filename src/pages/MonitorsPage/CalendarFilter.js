import React, { useState, useEffect } from 'react'
import moment from 'moment'
import gridOptionss from '../../components/Grid/Pagination'
import { useDispatch } from 'react-redux'
import { FILTERED_SENSORS, CLEAR_FILTER } from 'actions/sensorActions'

function CalendarFilter(props) {
  const dispatch = useDispatch()

  const onQuickFilterByCal = () => {
    let startDate = moment(document.getElementById('dateCal').value).format(
      'MM/DD/YYYY'
    )
    let endDate = moment(document.getElementById('compCal').value).format(
      'MM/DD/YYYY'
    )
    if (startDate && endDate === 'Invalid date') {
        return  dispatch({ type: CLEAR_FILTER })
    }else{
        let filteredDates = props.gridInfo.filter(date => {
            if (moment(date.created_at).isBetween(startDate, endDate)) {
              return date
            } else {
              return false
            }
          })
          dispatch({ type: FILTERED_SENSORS, payload: filteredDates })
    }
  }

  return (
    <div>
      <div className='calContainer'>
        <input type='date' onChange={onQuickFilterByCal} id='dateCal' />
      </div>
      <div className='calContainerComp'>
        <input type='date' onChange={onQuickFilterByCal} id='compCal' />
      </div>
    </div>
  )
}

export default CalendarFilter

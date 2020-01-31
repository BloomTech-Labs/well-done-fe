import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { FILTERED_SENSORS, CLEAR_FILTER } from 'actions/sensorActions'
import StatusDropDown from './StatusDropDown'
import NgoDropDown from './NgoDropDown'
import './CalFilter.scss'
import RadioStatusFilter from './RadioStatusFilter'

function CalendarFilter(props) {
  const [selectedDate, setSelectedDate] = React.useState('')
  const [selectedDateEnd, setSelectedDateEnd] = React.useState('')

  const handleDateChange = date => {
    setSelectedDate(date)
  }
  const handleDateChangeEnd = date => {
    setSelectedDateEnd(date)
  }

  const dispatch = useDispatch()

  const onQuickFilterByCal = () => {
    let startDate = moment(document.getElementById('dateCal').value).format(
      'MM/DD/YYYY'
    )
    let endDate = moment(document.getElementById('compCal').value).format(
      'MM/DD/YYYY'
    )

    console.log(startDate, 'handleChange')

    if (startDate && endDate === 'Invalid date') {
      return dispatch({ type: CLEAR_FILTER })
    } else {
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
    <div className='calendarContainer'>
      <div className='subCalendarContainer'>
        <div className='calContainer'>
          <input type='date' onChange={onQuickFilterByCal} id='dateCal' />
        </div>
        <div className='calContainerComp'>
          <input type='date' onChange={onQuickFilterByCal} id='compCal' />
        </div>
      </div>
      <div className='dropDownContainer'>
        {/* <RadioStatusFilter /> */}
        <StatusDropDown />
        <NgoDropDown />
      </div>
    </div>
  )
}

export default CalendarFilter

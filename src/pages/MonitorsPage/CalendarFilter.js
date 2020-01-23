import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { FILTERED_SENSORS, CLEAR_FILTER } from 'actions/sensorActions'

import './CalFilter.scss'

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
      {/* <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          value={selectedDate}
          format="MM/DD/YYYY"
          margin="normal"
          id="dateCal"
          label="Date picker inline"
          onChange={handleDateChange}
          onInput={onQuickFilterByCal}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/DD/YYYY"
          margin="normal"
          id="compCal"
          label="Date picker inline"
          value={selectedDateEnd}
          onChange={handleDateChangeEnd}
          onInput={onQuickFilterByCal}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
      </Grid>
    </MuiPickersUtilsProvider> */}
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

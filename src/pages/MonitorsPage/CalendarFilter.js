import React, { useState, useEffect } from 'react'
import moment from 'moment'
import gridOptionss from '../../components/Grid/Pagination'
import { useDispatch } from 'react-redux'
import { FILTERED_SENSORS, CLEAR_FILTER } from 'actions/sensorActions'

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  

function CalendarFilter(props) {

  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedDateEnd, setSelectedDateEnd] = React.useState('');

  const handleDateChange = date => {setSelectedDate(date);};
  const handleDateChangeEnd = date => {setSelectedDateEnd(date);};

  const dispatch = useDispatch()

    const onQuickFilterByCal = () => {
        let startDate = moment(document.getElementById('dateCal').value).format(
          'MM/DD/YYYY'
        )
        let endDate = moment(document.getElementById('compCal').value).format(
          'MM/DD/YYYY'
        )
        
        // handleDateChange(startDate)
        // console.log(startDate, 'start day')
        // handleDateChangeEnd(endDate)
            
    
        console.log(selectedDate,'handleChange')
    
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
      <MuiPickersUtilsProvider utils={MomentUtils}>
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
    </MuiPickersUtilsProvider>
      {/* <div className='calContainer'>
        <input type='date' onChange={onQuickFilterByCal} id='dateCal' />
      </div>
      <div className='calContainerComp'>
        <input type='date' onChange={onQuickFilterByCal} id='compCal' />
      </div> */}
    </div>
  )
}

export default CalendarFilter

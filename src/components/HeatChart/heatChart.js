import React from 'react'
import 'react-calendar-heatmap/dist/styles.css'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'
import { useSelector } from 'react-redux'
import './heatChartStyles.scss'
import moment from 'moment'

//handle click event for alert when svg is clicked
const handleClick = value => {
  if (value === null) return 'no info'
  return `on Date:${value['date']} the status was 
${value.count}`
}

// returns the status as a string
const handleStatus = statCodeNum => {
  return statCodeNum === 1
    ? 'Unknown'
    : statCodeNum === 2
    ? 'Functional'
    : statCodeNum === 0 || null
    ? 'not functional'
    : 'Unknown'
}
const today = new Date()

const HeatChart = props => {
  //stores currently selected sensor in state
  const currentlySelected = useSelector(
    state => state.historyReducer.individualSensorHistory
  )

  // creates an array of of history objects related to the currentlySelected sensor

  // iterates through statusHistoryArr and returns the date and count values needed by the calendar component.
  const calVals = currentlySelected.map(val => {
    return {
      date: val.created_at,
      count: val.status,
    }
  })
  //takes in current date and returns date x number of days forward or backward
  function shiftDate(date, numDays) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + numDays)
    return newDate
  }

  return (
    <div className='calendarBox'>
      <div className='calendarHeader'>
        <h3>Status Changes</h3>
      </div>
      <CalendarHeatmap
        startDate={shiftDate(today, -359)}
        endDate={today}
        values={calVals}
        classForValue={value => {
          if (!value || null) {
            return 'color-empty'
          }
          return `color-github-${value.count}`
        }}
        //on hover labels for Calendar
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${moment(value.date).format(
              'MM/DD/YYYY'
            )} status: ${handleStatus(value.count)}`,
          }
        }}
        //toggle display for weekday labels true || false
        showWeekdayLabels={true}
        onClick={value => handleClick(value)}
      />
      <ReactTooltip />
    </div>
  )
}

export default HeatChart

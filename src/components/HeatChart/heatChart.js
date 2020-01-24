import React from 'react'
import 'react-calendar-heatmap/dist/styles.css'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'
import { useDispatch, useSelector } from 'react-redux'
import './heatChartStyles.scss'
import moment from 'moment'

//handle click event for alert when svg is clicked
const handleClick = value => {
  if (value === null) return alert(`no info`)
  alert(`on Date:${value['date']} the status was 
${value.count}`)
}

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
  const currentlySelected = useSelector(
    state => state.selectedSensors.currentlySelected
  )

  const statusHistoryArr = props.history.filter(day => {
    return day.sensor_id === currentlySelected.sensor_pid
  })
  const calVals = statusHistoryArr.map(val => {
    return {
      date: val.created_at,
      count: val.status,
    }
  })
  //takes in current date and returns date
  function shiftDate(date, numDays) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + numDays)
    return newDate
  }

  const { status, created_at, sensor_pid } = currentlySelected
  return (
    <div className='calendarBox'>
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
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${moment(value.date)} status: ${handleStatus(
              value.count
            )}`,
          }
        }}
        showWeekdayLabels={true}
        onClick={value => handleClick(value)}
      />
      <ReactTooltip />
    </div>
  )
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i)
}

export default HeatChart

import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux'
import './heatChartStyles.scss';


const HeatChart = props => {
const currentlySelected = useSelector(state => state.selectedSensors.currentlySelected)
console.log(props, props.selectedSensor)

const statusHistory = props.history.filter(day => {
   return day.sensor_id ===
   currentlySelected.sensor_pid
 }
 )
const today = new Date();
console.log([statusHistory])
function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
const { status, created_at, sensor_pid } = currentlySelected
return( 
<div className='calendarBox'>
<h1>{sensor_pid}</h1>
<CalendarHeatmap
  startDate={shiftDate(today, -360)}
  endDate={today}
  value = {props.statusHistory}

  classForValue={value => {
    if (!value) {
      return 'color-empty';
    }
    return `color-github-${value.count}`;
  }}
  tooltipDataAttrs={value => {
    return {
      'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
        value.count
      }`,
    };
  }}
  showWeekdayLabels={true}
  onClick={value => alert(`Clicked on value with count: ${value.count}`)}
/>
<ReactTooltip />
</div>
)   
}

export default HeatChart
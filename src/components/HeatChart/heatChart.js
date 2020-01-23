import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux'
import './heatChartStyles.scss';

const today = new Date();
const HeatChart = props => {

const currentlySelected = useSelector(state => state.selectedSensors.currentlySelected)
console.log(props, props.selectedSensor)

const statusHistoryArr = props.history.filter(day => {
   return day.sensor_id ===
   currentlySelected.sensor_pid
 }
 )
 const randomValues = getRange(360).map(index => {
  return {
    date: shiftDate(today, -index),
    count: getRandomInt(1, 3),
  };
});


//  values={[
//   { date: '2016-01-01', count: 12 },
//   { date: '2016-01-22', count: 122 },
//   { date: '2016-01-30', count: 38 },
//   // ...and so on
// ]}
// const valuesArr = statusHistoryArr.map(historyObj =>{
//  return {date :'10/12/19' ,
//     count: historyObj.status}
// })



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
 values={randomValues}

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
function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default HeatChart
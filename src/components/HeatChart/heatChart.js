import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import './heatChartStyles.scss';

//Redux 
import { connect } from 'react-redux';

const HeatChart = props => {
<<<<<<< Updated upstream
function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
=======
>>>>>>> Stashed changes

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

<<<<<<< Updated upstream
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const today = new Date();

=======
const today = new Date();

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
>>>>>>> Stashed changes

const statusHistory = props.history.filter(day => {
  return day.sensor_id === props.selectedPump.physical_id
})
<<<<<<< Updated upstream
//   this is generating values TODO pull in values (1,2 or 3 from history)
    const randomValues = getRange(360).map(index => {
      // console.log(today);
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1,3),
    
    };
  });
  return (
    <div className='calendarBox'>
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
  );
=======

const {status, sensor_pid}
= props.selectedPump

const 
return( 
<div className='calendarBox'>
<CalendarHeatmap
  startDate={shiftDate(today, -360)}
  endDate={today}
  
  values = {statusHistory.map(day =>
    day.status == null|| day.status == null || day.status ==0 ?(
      
    ))}

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
>>>>>>> Stashed changes
}

export default HeatChart
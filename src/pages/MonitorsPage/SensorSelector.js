
import React from 'react';
import 'antd/dist/antd.css';
import { Slider } from 'antd';

import {useSelector} from 'react-redux'

const SensorSelector = () => {

const sensorIds = useSelector(state => state.sensorReducer.sensors)

const physical_id = sensorIds.map(e => {
    return e.physical_id
})

let first = physical_id[0]

let last = physical_id[physical_id.length -1]
console.log(last)

function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}

return (
    <>
  <div className="sensorSelector">
    
    <Slider
      range
      min={first}
      max={last}
      step={10}
      defaultValue={[first, last]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  </div>
  </>
  //document.getElementById('container'),
);
}
export default SensorSelector

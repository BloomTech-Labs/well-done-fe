import React from 'react'
import 'antd/dist/antd.css'
import { Slider } from 'antd'

import { useSelector, dispatch, useDispatch } from 'react-redux'

import './sensorSelector.scss'

const SensorSelector = () => {
  const sensorIds = useSelector(state => state.sensorReducer.sensors)

  const physical_id = sensorIds.map(e => {
    return e.physical_id
  })

  let lowest = Math.min(...physical_id)

  let highest = Math.max(...physical_id)

  const dispatch = useDispatch()

  let highestList = []
  let finalList = []

  function onAfterChange(value) {
    grid.map(e => {
      if (e.physical_id <= value[1]) {
        return highestList.push(e)
      }
    })
    highestList.map(e => {
      if (e.physical_id >= value[0]) {
        return finalList.push(e)
      }
    })
  }

  const toggleSensor = () => {
    let x = document.getElementById('slider')
    if (x.style.display === 'none') {
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  }

  return (
    <>
      <button onClick={toggleSensor}>Sensor Ids</button>
      <div id='slider'>
        <div className='sensorSlider'>
          <p>Select range of Sensor Ids</p>
          <Slider
            range
            min={lowest}
            max={highest}
            step={10}
            defaultValue={[lowest, highest]}
            onAfterChange={onAfterChange}
          />
        </div>
      </div>
    </>
  )
}
export default SensorSelector

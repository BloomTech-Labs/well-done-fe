import React, { useState, useEffect, PureComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHistoryById, fetchSensorById } from 'actions/sensorHistory'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import './MonitorsLineChart.styles.scss'

function MonitorsLineChart(props) {

  const [isToggleGraph, setIsToggleGraph] = useState(false)   
  const historySelector = useSelector(state => state.historyReducer)
  const dispatch = useDispatch()
  let selectedSensor = props.selectedPump

  useEffect(() => {
    dispatch(fetchHistoryById(selectedSensor.sensor_pid))
    dispatch(fetchSensorById(selectedSensor.sensor_pid))
    return () => {
      dispatch({ type: 'CLEAR_SELECTED' })
    }
  }, [])

  const padHistory = historySelector.individualSensorHistory

  const date = padHistory.map(day => day.date)

  const firstPadCount = padHistory.map(pad => pad.pad_count_0)
  const secondPadCount = padHistory.map(pad => pad.pad_count_1)
  const thirdPadCount = padHistory.map(pad => pad.pad_count_2)
  const fourthPadCount = padHistory.map(pad => pad.pad_count_3)

  const firstPadSecond = padHistory.map(pad => pad.pad_seconds_0)
  const secondPadSecond = padHistory.map(pad => pad.pad_seconds_1)
  const thirdPadSecond = padHistory.map(pad => pad.pad_seconds_2)
  const fourthPadSecond = padHistory.map(pad => pad.pad_seconds_3)

  if (historySelector.individualSensor.length === 0) {
    return <div>loading...</div>
  }

  const data = [
    {
      name: date,
      First_Pad_Count: firstPadCount[0],
      Second_Pad_Count: secondPadCount[0],
      Third_Pad_Count: thirdPadCount[0],
      Fourth_Pad_Count: fourthPadCount[0],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[1],
      Second_Pad_Count: secondPadCount[1],
      Third_Pad_Count: thirdPadCount[1],
      Fourth_Pad_Count: fourthPadCount[1],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[2],
      Second_Pad_Count: secondPadCount[2],
      Third_Pad_Count: thirdPadCount[2],
      Fourth_Pad_Count: fourthPadCount[2],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[3],
      Second_Pad_Count: secondPadCount[3],
      Third_Pad_Count: thirdPadCount[3],
      Fourth_Pad_Count: fourthPadCount[3],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[4],
      Second_Pad_Count: secondPadCount[4],
      Third_Pad_Count: thirdPadCount[4],
      Fourth_Pad_Count: fourthPadCount[4],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[5],
      Second_Pad_Count: secondPadCount[5],
      Third_Pad_Count: thirdPadCount[5],
      Fourth_Pad_Count: fourthPadCount[5],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[6],
      Second_Pad_Count: secondPadCount[6],
      Third_Pad_Count: thirdPadCount[6],
      Fourth_Pad_Count: fourthPadCount[6],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[7],
      Second_Pad_Count: secondPadCount[7],
      Third_Pad_Count: thirdPadCount[7],
      Fourth_Pad_Count: fourthPadCount[7],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[8],
      Second_Pad_Count: secondPadCount[8],
      Third_Pad_Count: thirdPadCount[8],
      Fourth_Pad_Count: fourthPadCount[8],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[9],
      Second_Pad_Count: secondPadCount[9],
      Third_Pad_Count: thirdPadCount[9],
      Fourth_Pad_Count: fourthPadCount[9],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[10],
      Second_Pad_Count: secondPadCount[10],
      Third_Pad_Count: thirdPadCount[10],
      Fourth_Pad_Count: fourthPadCount[10],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[11],
      Second_Pad_Count: secondPadCount[11],
      Third_Pad_Count: thirdPadCount[11],
      Fourth_Pad_Count: fourthPadCount[11],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[12],
      Second_Pad_Count: secondPadCount[12],
      Third_Pad_Count: thirdPadCount[12],
      Fourth_Pad_Count: fourthPadCount[12],
    },
  ]

  ////////PAD SECONDS ////////
  const dataSecond = [
    {
      name: date,
      First_Pad_Second: firstPadSecond[0],
      Second_Pad_Second: secondPadSecond[0],
      Third_Pad_Second: thirdPadCount[0],
      Fourth_Pad_Second: fourthPadSecond[0],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[1],
      Second_Pad_Second: secondPadSecond[1],
      Third_Pad_Second: thirdPadCount[1],
      Fourth_Pad_Second: fourthPadSecond[1],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[2],
      Second_Pad_Second: secondPadSecond[2],
      Third_Pad_Second: thirdPadCount[2],
      Fourth_Pad_Second: fourthPadSecond[2],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[3],
      Second_Pad_Second: secondPadSecond[3],
      Third_Pad_Second: thirdPadCount[3],
      Fourth_Pad_Second: fourthPadSecond[3],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[4],
      Second_Pad_Second: secondPadSecond[4],
      Third_Pad_Second: thirdPadCount[4],
      Fourth_Pad_Second: fourthPadSecond[4],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[5],
      Second_Pad_Second: secondPadSecond[5],
      Third_Pad_Second: thirdPadCount[5],
      Fourth_Pad_Second: fourthPadSecond[5],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[6],
      Second_Pad_Second: secondPadSecond[6],
      Third_Pad_Second: thirdPadCount[6],
      Fourth_Pad_Second: fourthPadSecond[6],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[7],
      Second_Pad_Second: secondPadSecond[7],
      Third_Pad_Second: thirdPadCount[7],
      Fourth_Pad_Second: fourthPadSecond[7],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[8],
      Second_Pad_Second: secondPadSecond[8],
      Third_Pad_Second: thirdPadCount[8],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[9],
      Second_Pad_Second: secondPadSecond[9],
      Third_Pad_Second: thirdPadCount[9],
      Fourth_Pad_Second: fourthPadSecond[9],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[10],
      Second_Pad_Second: secondPadSecond[10],
      Third_Pad_Second: thirdPadCount[10],
      Fourth_Pad_Second: fourthPadSecond[10],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[11],
      Second_Pad_Second: secondPadSecond[11],
      Third_Pad_Second: thirdPadCount[11],
      Fourth_Pad_Second: fourthPadSecond[11],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[12],
      Second_Pad_Second: secondPadSecond[12],
      Third_Pad_Second: thirdPadCount[12],
      Fourth_Pad_Second: fourthPadSecond[12],
    },
  ]

  return (
    <>
    <div className='toggleGraphContainer'>
        <button className='CountBtn'
        onClick={() => setIsToggleGraph(!isToggleGraph)}>Pad Counts</button>

        <button className="SecondBtn" 
        onClick={() => setIsToggleGraph(!isToggleGraph)}>Pad Seconds</button>
    </div>
    <div className='countCountContainer'>
      <div  className={ isToggleGraph ? 'toggleCountOn' : 'toggleCountOff' }>
        <LineChart
          width={1300}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='10 13' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='First_Pad_Count' stroke='#82ca9d' />
          <Line type='monotone' dataKey='Second_Pad_Count' stroke='#8884d8' />
          <Line type='monotone' dataKey='Third_Pad_Count' stroke='#000' />
          <Line type='monotone' dataKey='Fourth_Pad_Count' stroke='red' />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
        </div>
      </div>

      {/* /// pad seconds chart */}
      <div className='countSecondContainer'>
      <div  className={ isToggleGraph ? 'toggleSecondOff':'toggleSecondOn'}>
        <LineChart
          width={1300}
          height={500}
          data={dataSecond}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='10 13' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='First_Pad_Second' stroke='#82ca9d' />
          <Line type='monotone' dataKey='Second_Pad_Second' stroke='#8884d8' />
          <Line type='monotone' dataKey='Third_Pad_Second' stroke='#000' />
          <Line type='monotone' dataKey='Fourth_Pad_Second' stroke='red' />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </div>
    </div>
    </>
  )
}

export default MonitorsLineChart

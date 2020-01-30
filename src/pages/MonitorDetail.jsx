import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute.jsx'

import HeatChart from 'components/HeatChart/heatChart'
import MonitorDetailHeader from './MonitorDetailHeader'

import { useSelector, useDispatch } from 'react-redux'

import GoBack from '../components/Navbar/GoBack'
import OrganizationActivity from '../components/DashBoardComponents/OrganizationActivity'
import MonitorLineChart from './MonitorsLineChart'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './MonitorsLineChart.styles.scss'

//redux
import { fetchHistoryById, fetchSensorById } from 'actions/sensorHistory'
import LogsTable from './MonitorsPage/Logs/LogsTable'

const MonitorDetails = props => {
  const [isMonth, setIsMonth] = useState(false)
  const [isToggleGraph, setIsToggleGraph] = useState(false)
  const [isClicked, setIsClicked] = useState(true)
  const [opacity, setOpacity] = useState({
    First_Pad_Count: 1,
    Second_Pad_Count: 1,
    Third_Pad_Count: 1,
    Fourth_Pad_Count: 1,
  })

  const [viewport, setViewport] = useState({
    latitude: 13.5651,
    longitude: 104.7538,
    width: '100%',
    height: '40vh',
    zoom: 7,
  })
  const deleteHandler = (event, id) => {
    event.preventDefault()
    props.deleteOrg(id) //actions
    props.params.api.redrawRows()
  }
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

  console.log(historySelector.individualSensorHistory)

  const padHistory = historySelector.individualSensorHistory

  const date = padHistory.slice(-30).map(day => day.date)
  const weekDate = padHistory.slice(-7).map(day => day.date)

  const firstPadCount = padHistory.slice(-30).map(pad => pad.pad_count_0)
  const secondPadCount = padHistory.slice(-30).map(pad => pad.pad_count_1)
  const thirdPadCount = padHistory.slice(-30).map(pad => pad.pad_count_2)
  const fourthPadCount = padHistory.slice(-30).map(pad => pad.pad_count_3)

  const firstPadCountWeek = padHistory.slice(-7).map(pad => pad.pad_count_0)
  const secondPadCountWeek = padHistory.slice(-7).map(pad => pad.pad_count_1)
  const thirdPadCountWeek = padHistory.slice(-7).map(pad => pad.pad_count_2)
  const fourthPadCountWeek = padHistory.slice(-7).map(pad => pad.pad_count_3)

  const firstPadSecond = padHistory.slice(-30).map(pad => pad.pad_seconds_0)
  const secondPadSecond = padHistory.slice(-30).map(pad => pad.pad_seconds_1)
  const thirdPadSecond = padHistory.slice(-30).map(pad => pad.pad_seconds_2)
  const fourthPadSecond = padHistory.slice(-30).map(pad => pad.pad_seconds_3)

  const firstPadSecondWeek = padHistory.slice(-7).map(pad => pad.pad_seconds_0)
  const secondPadSecondWeek = padHistory.slice(-7).map(pad => pad.pad_seconds_1)
  const thirdPadSecondWeek = padHistory.slice(-7).map(pad => pad.pad_seconds_2)
  const fourthPadSecondWeek = padHistory.slice(-7).map(pad => pad.pad_seconds_3)

  const unknown =
    'https://res.cloudinary.com/dfulxq7so/image/upload/v1573056729/Vector_q9ihvh.png'
  const notFunctioning =
    'https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png'
  const functioning =
    'https://res.cloudinary.com/dfulxq7so/image/upload/v1573056725/Vector_1_xzgama.png'

  if (historySelector.individualSensor.length === 0) {
    return <div>loading...</div>
  }

  // Makes new arrays to loop through the week and month data from weekDate array
  const endWeekIndex = 6
  const monthCount = 29
  const weekData = []
  const monthData = []
  for (let i = 0; i <= monthCount; i++) {
    if (i <= endWeekIndex) {
      weekData.push({
        name: weekDate,
        First_Pad_Count: firstPadCountWeek[i],
        Second_Pad_Count: secondPadCountWeek[i],
        Third_Pad_Count: thirdPadCountWeek[i],
        Fourth_Pad_Count: fourthPadCountWeek[i],
      })
    }
    monthData.push({
      name: date,
      First_Pad_Count: firstPadCount[i],
      Second_Pad_Count: secondPadCount[i],
      Third_Pad_Count: thirdPadCount[i],
      Fourth_Pad_Count: fourthPadCount[i],
    })
  }

  // Makes new arrays to loop through the week and month data from date array
  const endWeekSecond = 6
  const monthSecond = 29
  const weekDataSecond = []
  const monthSecondData = []
  for (let i = 0; i <= monthSecond; i++) {
    if (i <= endWeekSecond) {
      weekDataSecond.push({
        name: weekDate,
        First_Pad_Second: firstPadSecondWeek[i],
        Second_Pad_Second: secondPadSecondWeek[i],
        Third_Pad_Second: thirdPadSecondWeek[i],
        Fourth_Pad_Second: fourthPadSecondWeek[i],
      })
    }
    monthSecondData.push({
      name: date,
      First_Pad_Second: firstPadSecond[i],
      Second_Pad_Second: secondPadSecond[i],
      Third_Pad_Second: thirdPadSecond[i],
      Fourth_Pad_Second: fourthPadSecond[i],
    })
  }

  const handleClick = e => {
    const { dataKey } = e
    if (isClicked) {
      setOpacity({
        ...opacity,
        [dataKey]: 0,
      })
    } else {
      setOpacity({
        ...opacity,
        [dataKey]: 1,
      })
    }
    setIsClicked(!isClicked)
  }
  console.log('check')

  return (
    <div>
      <MonitorDetailHeader historySelector={historySelector.individualSensor} />
      {/* <OrganizationActivity
        alertInfo={historySelector.alertInfo}
        individualSensor={historySelector.individualSensor[0]}
        individualSensorHistory={historySelector.individualSensorHistory}
      />  */}

      <>
        <div className='padMonitorContainer'>
          <h3>Pad Monitor</h3>
          <div className='toggleBtnContainer'>
            <div className='toggleDateContainer'>
              <p
                className={!isMonth ? 'weekBtnOn' : 'weekBtnOff'}
                onClick={() => setIsMonth(!isMonth)}
              >
                Weekly
              </p>
              <p
                className={isMonth ? 'monthBtnOn' : 'monthBtnOff'}
                onClick={() => setIsMonth(!isMonth)}
              >
                Monthly
              </p>
            </div>
            <button
              className={!isToggleGraph ? 'countBtnOn' : 'countBtnOff'}
              onClick={() => setIsToggleGraph(!isToggleGraph)}
            >
              Counts
            </button>
            <button
              className={isToggleGraph ? 'secondBtnOn' : 'SecondBtnOff'}
              onClick={() => setIsToggleGraph(!isToggleGraph)}
            >
              Seconds
            </button>
          </div>
          <div
            className={
              !isToggleGraph ? 'countCountContainer' : 'toggleCountOff'
            }
          >
            <ResponsiveContainer width='80%'>
              <LineChart
                data={isMonth ? monthData : weekData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend
                  onClick={handleClick}
                  layout='vertical'
                  wrapperStyle={{
                    top: '200px',
                    right: '-130px',
                  }}
                />
                <Line
                  strokeOpacity={opacity.First_Pad_Count}
                  dataKey='First_Pad_Count'
                  type='monotone'
                  // stroke={isMonth ? '#261592' : 'red'}
                  stroke='#261592'
                />
                <Line
                  strokeOpacity={opacity.Second_Pad_Count}
                  type='monotone'
                  dataKey='Second_Pad_Count'
                  stroke='#FFAD34'
                />
                <Line
                  strokeOpacity={opacity.Third_Pad_Count}
                  type='monotone'
                  dataKey='Third_Pad_Count'
                  stroke='#15B567'
                />
                <Line
                  strokeOpacity={opacity.Fourth_Pad_Count}
                  type='monotone'
                  dataKey='Fourth_Pad_Count'
                  stroke='#921515'
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* /// pad seconds chart */}
          <div
            className={
              isToggleGraph ? 'countSecondContainer' : 'toggleSecondOff'
            }
          >
            <ResponsiveContainer width='80%'>
              <LineChart
                data={isMonth ? monthSecondData : weekDataSecond}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend
                  onClick={handleClick}
                  layout='vertical'
                  wrapperStyle={{
                    top: '200px',
                    right: '-140px',
                  }}
                />
                <Line
                  strokeOpacity={opacity.First_Pad_Second}
                  type='monotone'
                  dataKey='First_Pad_Second'
                  stroke='#261592'
                />
                <Line
                  strokeOpacity={opacity.Second_Pad_Second}
                  type='monotone'
                  dataKey='Second_Pad_Second'
                  stroke='#FFAD34'
                />
                <Line
                  strokeOpacity={opacity.Third_Pad_Second}
                  type='monotone'
                  dataKey='Third_Pad_Second'
                  stroke='#15B567'
                />
                <Line
                  strokeOpacity={opacity.Fourth_Pad_Second}
                  type='monotone'
                  dataKey='Fourth_Pad_Second'
                  stroke='#921515'
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <HeatChart
          sensors={props.sensors}
          selectedPump={props.selectedSensors}
          history={historySelector.history}
        />
        <LogsTable selectedPump={props.selectedSensors} />
      </>
    </div>
  )
}

export default MonitorDetails

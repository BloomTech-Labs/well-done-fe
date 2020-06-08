import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
// import './MonitorDetail.css'
import HeatChart from 'components/HeatChart/heatChart'
import { useParams, withRouter } from 'react-router'
import MonitorDetailHeader from './MonitorDetailHeader'

import { useSelector, useDispatch } from 'react-redux'

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
import '../MonitorDetails/MonitorsLineChart.styles.scss'

//redux
import { fetchHistoryById, fetchSensorById } from 'actions/sensorHistory'

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

  // Routing
  const { sensor_pid: sensorId } = useParams()

  const historySelector = useSelector(state => state.historyReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHistoryById(sensorId))
    dispatch(fetchSensorById(sensorId))
    return () => {
      dispatch({ type: 'CLEAR_SELECTED' })
    }
  }, [dispatch, sensorId])

  const padHistory = historySelector.individualSensorHistory

  // Volume
  const volume = padHistory.map(item => {
    return { Volume: item.pad_seconds_2 / 1.141, date: item.date }
  })
  const weekVolumeDate = volume
    .slice(0, 7)
    .map(day => day.date)
    .reverse()
  const monthVolumeDate = padHistory
    .slice(0, 30)
    .map(day => day.date)
    .reverse()

  const weekVolume = volume.slice(0, 7).map(item => {
    return { Volume: item.Volume, name: weekVolumeDate }
  })

  const monthVolume = volume.slice(0, 30).map(item => {
    return { Volume: item.Volume, name: monthVolumeDate }
  })

  const date = padHistory
    .slice(0, 30)
    .map(day => day.date)
    .reverse()
  const weekDate = padHistory
    .slice(0, 7)
    .map(day => day.date)
    .reverse()

  const firstPadSecond = padHistory.slice(0, 30).map(pad => pad.pad_seconds_0)
  const secondPadSecond = padHistory.slice(0, 30).map(pad => pad.pad_seconds_1)
  const thirdPadSecond = padHistory.slice(0, 30).map(pad => pad.pad_seconds_2)
  const fourthPadSecond = padHistory.slice(0, 30).map(pad => pad.pad_seconds_3)

  const firstPadSecondWeek = padHistory
    .slice(0, 7)
    .map(pad => pad.pad_seconds_0)
  const secondPadSecondWeek = padHistory
    .slice(0, 7)
    .map(pad => pad.pad_seconds_1)
  const thirdPadSecondWeek = padHistory
    .slice(0, 7)
    .map(pad => pad.pad_seconds_2)
  const fourthPadSecondWeek = padHistory
    .slice(0, 7)
    .map(pad => pad.pad_seconds_3)

  if (historySelector.individualSensor.length === 0) {
    return <div>loading...</div>
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

  // sets opacity of line to 0 when clicked in the legend
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

  return (
    <div className='monitorDetailsContainer'>
      <MonitorDetailHeader historySelector={historySelector.individualSensor} />
      <>
        <div className='padMonitorContainer'>
          <h3>Pad Monitor</h3>
          <div className='toggleBtnContainer'>
            <div className='toggleDateContainer'>
              <p
                className={!isMonth ? 'weekBtnOn' : 'weekBtnOff'}
                onClick={() => setIsMonth(!isMonth)}
              >
                Past 7 Days
              </p>
              <p
                className={isMonth ? 'monthBtnOn' : 'monthBtnOff'}
                onClick={() => setIsMonth(!isMonth)}
              >
                Past 30 Days
              </p>
            </div>
            <button
              className={!isToggleGraph ? 'countBtnOn' : 'countBtnOff'}
              onClick={() => setIsToggleGraph(!isToggleGraph)}
            >
              Volume
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
            <div className='yAxisLabel'>Liters</div>
            <ResponsiveContainer width='80%'>
              <LineChart
                data={isMonth ? monthVolume.reverse() : weekVolume.reverse()}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis></YAxis>
                <Tooltip />
                <Legend
                  onClick={handleClick}
                  layout='horizontal'
                  wrapperStyle={
                    {
                      // top: '200px',
                      // right: '-130px',
                    }
                  }
                />
                <Line
                  strokeOpacity={opacity.Volume}
                  dataKey='Volume'
                  type='monotone'
                  stroke='#261592'
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
            <div className='yAxisLabel'>Pad Seconds</div>
            <ResponsiveContainer width='80%'>
              <LineChart
                data={
                  isMonth ? monthSecondData.reverse() : weekDataSecond.reverse()
                }
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis></YAxis>
                <Tooltip />
                <Legend
                  onClick={handleClick}
                  layout='horizontal'
                  // wrapperStyle={{
                  //   top: '200px',
                  //   right: '-140px',
                  // }}
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
        {/* <LogsTable selectedPump={props.selectedSensors} /> */}
      </>
    </div>
  )
}

export default withRouter(MonitorDetails)

import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute.jsx'
// import { Row, Col, Descriptions, Badge, Typography } from 'antd'

// import 'antd/dist/antd.css'
// import './MonitorDetail.css'
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
import { deleteSensor } from '../actions/sensorActions'
import { fetchHistoryById, fetchSensorById } from 'actions/sensorHistory'
import { styles } from '../../node_modules/material-ui-pickers/DatePicker/components/SlideTransition'

// const { Title } = Typography

const MonitorDetails = props => {
  const [isMonth, setIsMonth] = useState(false)
  const [isWeek, setIsWeek] = useState(false)
  const [isToggleGraph, setIsToggleGraph] = useState(false)

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

  const {
    physical_id,
    data_finished,
    reported_percent,
    commune_name,
    province_name,
    village_name,
    status,
    depth,
    total,
    latitude,
    longitude,
  } = historySelector.individualSensor[0]

  const data = [
    {
      name: weekDate,
      First_Pad_Count: firstPadCountWeek[0],
      Second_Pad_Count: secondPadCountWeek[0],
      Third_Pad_Count: thirdPadCountWeek[0],
      Fourth_Pad_Count: fourthPadCountWeek[0],
    },
    {
      name: weekDate,
      First_Pad_Count: firstPadCountWeek[1],
      Second_Pad_Count: secondPadCountWeek[1],
      Third_Pad_Count: thirdPadCountWeek[1],
      Fourth_Pad_Count: fourthPadCountWeek[1],
    },
    {
      name: weekDate,
      First_Pad_Count: firstPadCountWeek[2],
      Second_Pad_Count: secondPadCountWeek[2],
      Third_Pad_Count: thirdPadCountWeek[2],
      Fourth_Pad_Count: fourthPadCountWeek[2],
    },
    {
      name: weekDate,
      First_Pad_Count: firstPadCountWeek[3],
      Second_Pad_Count: secondPadCountWeek[3],
      Third_Pad_Count: thirdPadCountWeek[3],
      Fourth_Pad_Count: fourthPadCountWeek[3],
    },
    {
      name: weekDate,
      First_Pad_Count: firstPadCountWeek[4],
      Second_Pad_Count: secondPadCountWeek[4],
      Third_Pad_Count: thirdPadCountWeek[4],
      Fourth_Pad_Count: fourthPadCountWeek[4],
    },
    {
      name: weekDate,
      First_Pad_Count: firstPadCountWeek[5],
      Second_Pad_Count: secondPadCountWeek[5],
      Third_Pad_Count: thirdPadCountWeek[5],
      Fourth_Pad_Count: fourthPadCountWeek[5],
    },
    {
      name: weekDate,
      First_Pad_Count: firstPadCountWeek[6],
      Second_Pad_Count: secondPadCountWeek[6],
      Third_Pad_Count: thirdPadCountWeek[6],
      Fourth_Pad_Count: fourthPadCountWeek[6],
    },
  ]

  ////////PAD SECONDS ////////
  const dataSecond = [
    {
      name: weekDate,
      First_Pad_Second: firstPadSecondWeek[0],
      Second_Pad_Second: secondPadSecondWeek[0],
      Third_Pad_Second: thirdPadSecondWeek[0],
      Fourth_Pad_Second: fourthPadSecondWeek[0],
    },
    {
      name: weekDate,
      First_Pad_Second: firstPadSecondWeek[1],
      Second_Pad_Second: secondPadSecondWeek[1],
      Third_Pad_Second: thirdPadSecondWeek[1],
      Fourth_Pad_Second: fourthPadSecondWeek[1],
    },
    {
      name: weekDate,
      First_Pad_Second: firstPadSecondWeek[2],
      Second_Pad_Second: secondPadSecondWeek[2],
      Third_Pad_Second: thirdPadSecondWeek[2],
      Fourth_Pad_Second: fourthPadSecondWeek[2],
    },
    {
      name: weekDate,
      First_Pad_Second: firstPadSecondWeek[3],
      Second_Pad_Second: secondPadSecondWeek[3],
      Third_Pad_Second: thirdPadSecondWeek[3],
      Fourth_Pad_Second: fourthPadSecondWeek[3],
    },
    {
      name: weekDate,
      First_Pad_Second: firstPadSecondWeek[4],
      Second_Pad_Second: secondPadSecondWeek[4],
      Third_Pad_Second: thirdPadSecondWeek[4],
      Fourth_Pad_Second: fourthPadSecondWeek[4],
    },
    {
      name: weekDate,
      First_Pad_Second: firstPadSecondWeek[5],
      Second_Pad_Second: secondPadSecondWeek[5],
      Third_Pad_Second: thirdPadCountWeek[5],
      Fourth_Pad_Second: fourthPadSecondWeek[5],
    },
    {
      name: weekDate,
      First_Pad_Second: firstPadSecondWeek[6],
      Second_Pad_Second: secondPadSecondWeek[6],
      Third_Pad_Second: thirdPadCountWeek[6],
      Fourth_Pad_Second: fourthPadSecondWeek[6],
    },
  ]

  const monthDataCount = [
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
      First_Pad_Count: firstPadCount[13],
      Second_Pad_Count: secondPadCount[13],
      Third_Pad_Count: thirdPadCount[13],
      Fourth_Pad_Count: fourthPadCount[13],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[14],
      Second_Pad_Count: secondPadCount[14],
      Third_Pad_Count: thirdPadCount[14],
      Fourth_Pad_Count: fourthPadCount[14],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[15],
      Second_Pad_Count: secondPadCount[15],
      Third_Pad_Count: thirdPadCount[15],
      Fourth_Pad_Count: fourthPadCount[15],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[16],
      Second_Pad_Count: secondPadCount[16],
      Third_Pad_Count: thirdPadCount[16],
      Fourth_Pad_Count: fourthPadCount[16],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[17],
      Second_Pad_Count: secondPadCount[17],
      Third_Pad_Count: thirdPadCount[17],
      Fourth_Pad_Count: fourthPadCount[17],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[18],
      Second_Pad_Count: secondPadCount[18],
      Third_Pad_Count: thirdPadCount[18],
      Fourth_Pad_Count: fourthPadCount[18],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[19],
      Second_Pad_Count: secondPadCount[19],
      Third_Pad_Count: thirdPadCount[19],
      Fourth_Pad_Count: fourthPadCount[19],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[20],
      Second_Pad_Count: secondPadCount[20],
      Third_Pad_Count: thirdPadCount[20],
      Fourth_Pad_Count: fourthPadCount[20],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[21],
      Second_Pad_Count: secondPadCount[21],
      Third_Pad_Count: thirdPadCount[21],
      Fourth_Pad_Count: fourthPadCount[21],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[22],
      Second_Pad_Count: secondPadCount[22],
      Third_Pad_Count: thirdPadCount[22],
      Fourth_Pad_Count: fourthPadCount[22],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[23],
      Second_Pad_Count: secondPadCount[23],
      Third_Pad_Count: thirdPadCount[23],
      Fourth_Pad_Count: fourthPadCount[23],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[24],
      Second_Pad_Count: secondPadCount[24],
      Third_Pad_Count: thirdPadCount[24],
      Fourth_Pad_Count: fourthPadCount[24],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[25],
      Second_Pad_Count: secondPadCount[25],
      Third_Pad_Count: thirdPadCount[25],
      Fourth_Pad_Count: fourthPadCount[25],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[26],
      Second_Pad_Count: secondPadCount[26],
      Third_Pad_Count: thirdPadCount[26],
      Fourth_Pad_Count: fourthPadCount[26],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[27],
      Second_Pad_Count: secondPadCount[27],
      Third_Pad_Count: thirdPadCount[27],
      Fourth_Pad_Count: fourthPadCount[27],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[28],
      Second_Pad_Count: secondPadCount[28],
      Third_Pad_Count: thirdPadCount[28],
      Fourth_Pad_Count: fourthPadCount[28],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[29],
      Second_Pad_Count: secondPadCount[29],
      Third_Pad_Count: thirdPadCount[29],
      Fourth_Pad_Count: fourthPadCount[29],
    },
    {
      name: date,
      First_Pad_Count: firstPadCount[30],
      Second_Pad_Count: secondPadCount[30],
      Third_Pad_Count: thirdPadCount[30],
      Fourth_Pad_Count: fourthPadCount[30],
    },
  ]

  const monthDataSecond = [
    {
      name: date,
      First_Pad_Second: firstPadSecond[0],
      Second_Pad_Second: secondPadSecond[0],
      Third_Pad_Second: thirdPadSecond[0],
      Fourth_Pad_Second: fourthPadSecond[0],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[1],
      Second_Pad_Second: secondPadSecond[1],
      Third_Pad_Second: thirdPadSecond[1],
      Fourth_Pad_Second: fourthPadSecond[1],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[2],
      Second_Pad_Second: secondPadSecond[2],
      Third_Pad_Second: thirdPadSecond[2],
      Fourth_Pad_Second: fourthPadSecond[2],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[3],
      Second_Pad_Second: secondPadSecond[3],
      Third_Pad_Second: thirdPadSecond[3],
      Fourth_Pad_Second: fourthPadSecond[3],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[4],
      Second_Pad_Second: secondPadSecond[4],
      Third_Pad_Second: thirdPadSecond[4],
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
      Third_Pad_Second: thirdPadSecond[7],
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
      Third_Pad_Second: thirdPadSecond[9],
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
      Third_Pad_Second: thirdPadSecond[11],
      Fourth_Pad_Second: fourthPadSecond[11],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[12],
      Second_Pad_Second: secondPadSecond[12],
      Third_Pad_Second: thirdPadCount[12],
      Fourth_Pad_Second: fourthPadSecond[12],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[13],
      Second_Pad_Second: secondPadSecond[13],
      Third_Pad_Second: thirdPadCount[13],
      Fourth_Pad_Second: fourthPadSecond[13],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[14],
      Second_Pad_Second: secondPadSecond[14],
      Third_Pad_Second: thirdPadCount[14],
      Fourth_Pad_Second: fourthPadSecond[14],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[15],
      Second_Pad_Second: secondPadSecond[15],
      Third_Pad_Second: thirdPadCount[15],
      Fourth_Pad_Second: fourthPadSecond[15],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[16],
      Second_Pad_Second: secondPadSecond[16],
      Third_Pad_Second: thirdPadCount[16],
      Fourth_Pad_Second: fourthPadSecond[16],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[17],
      Second_Pad_Second: secondPadSecond[17],
      Third_Pad_Second: thirdPadCount[17],
      Fourth_Pad_Second: fourthPadSecond[17],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[18],
      Second_Pad_Second: secondPadSecond[18],
      Third_Pad_Second: thirdPadCount[18],
      Fourth_Pad_Second: fourthPadSecond[18],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[19],
      Second_Pad_Second: secondPadSecond[19],
      Third_Pad_Second: thirdPadCount[19],
      Fourth_Pad_Second: fourthPadSecond[19],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[20],
      Second_Pad_Second: secondPadSecond[20],
      Third_Pad_Second: thirdPadCount[20],
      Fourth_Pad_Second: fourthPadSecond[20],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[21],
      Second_Pad_Second: secondPadSecond[21],
      Third_Pad_Second: thirdPadCount[21],
      Fourth_Pad_Second: fourthPadSecond[21],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[22],
      Second_Pad_Second: secondPadSecond[22],
      Third_Pad_Second: thirdPadCount[22],
      Fourth_Pad_Second: fourthPadSecond[22],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[23],
      Second_Pad_Second: secondPadSecond[23],
      Third_Pad_Second: thirdPadCount[23],
      Fourth_Pad_Second: fourthPadSecond[23],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[24],
      Second_Pad_Second: secondPadSecond[24],
      Third_Pad_Second: thirdPadCount[24],
      Fourth_Pad_Second: fourthPadSecond[24],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[25],
      Second_Pad_Second: secondPadSecond[25],
      Third_Pad_Second: thirdPadCount[25],
      Fourth_Pad_Second: fourthPadSecond[25],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[26],
      Second_Pad_Second: secondPadSecond[26],
      Third_Pad_Second: thirdPadCount[26],
      Fourth_Pad_Second: fourthPadSecond[26],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[27],
      Second_Pad_Second: secondPadSecond[27],
      Third_Pad_Second: thirdPadCount[27],
      Fourth_Pad_Second: fourthPadSecond[27],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[28],
      Second_Pad_Second: secondPadSecond[28],
      Third_Pad_Second: thirdPadCount[28],
      Fourth_Pad_Second: fourthPadSecond[28],
    },
    {
      name: date,
      First_Pad_Second: firstPadSecond[29],
      Second_Pad_Second: secondPadSecond[29],
      Third_Pad_Second: thirdPadCount[29],
      Fourth_Pad_Second: fourthPadSecond[29],
    },
  ]

  return (
    <div>
      <MonitorDetailHeader historySelector={historySelector.individualSensor} />

      {/* <button  className="deleteMonitorDetails" onClick={deleteHandler}><i className="icon-trash"></i>Delete</button> */}
      {/* <OrganizationActivity
        alertInfo={historySelector.alertInfo}
        individualSensor={historySelector.individualSensor[0]}
        individualSensorHistory={historySelector.individualSensorHistory}
      />  */}

      <>
        {/* <Row>
        <Col span={20} offset={4}>
          <Title>{physical_id}</Title>
        </Col>
      </Row>
      <Col span={1}>
          <GoBack/>
        </Col> */}
        <div className='padMonitorContainer'>
          <h3>Pad Monitor</h3>
          <div className='toggleBtnContainer'>
            <div className='toggleDateContainer'>
              <p
                className={!isMonth ? 'weekBtnOn' : 'weekBtnOff'}
                onClick={() => setIsMonth(!isMonth)}
              >
                Week
              </p>
              <p
                className={isMonth ? 'monthBtnOn' : 'monthBtnOff'}
                onClick={() => setIsMonth(!isMonth)}
              >
                Month
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
                data={isMonth ? monthDataCount : data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend
                  layout='vertical'
                  wrapperStyle={{
                    border: '1px solid red',
                    top: '200px',
                    right: '-130px',
                  }}
                />
                <Line
                  type='monotone'
                  dataKey='First_Pad_Count'
                  stroke='#261592'
                />
                <Line
                  type='monotone'
                  dataKey='Second_Pad_Count'
                  stroke='#FFAD34'
                />
                <Line
                  type='monotone'
                  dataKey='Third_Pad_Count'
                  stroke='#15B567'
                />
                <Line
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
                data={isMonth ? monthDataSecond : dataSecond}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='First_Pad_Second'
                  stroke='#261592'
                />
                <Line
                  type='monotone'
                  dataKey='Second_Pad_Second'
                  stroke='#FFAD34'
                />
                <Line
                  type='monotone'
                  dataKey='Third_Pad_Second'
                  stroke='#15B567'
                />
                <Line
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
      </>

      {/* <Row gutter={[8, 32]}>
        <Col span={16} offset={4}>
          <Descriptions
            layout='vertical'
            column={{ xxl: 8 }}
            style={{ fontWeight: 'bold' }}
          >
            <Descriptions.Item label='Status'>
              {status === 0 || status === null ? (
                <Badge status='error' text='Not Functioning' />
              ) : status === 1 ? (
                <Badge status='warning' text='Unknown' />
              ) : (
                <Badge status='success' text='Functioning' />
              )}
            </Descriptions.Item>
            <Descriptions.Item label='Constructed'>
              {data_finished}
            </Descriptions.Item>
            <Descriptions.Item label='Depth'>{depth}</Descriptions.Item>
            <Descriptions.Item label='Percent'>
              {reported_percent}
            </Descriptions.Item>
            <Descriptions.Item label='Total'>{total}</Descriptions.Item>
            <Descriptions.Item label='Commune'>
              {commune_name}
            </Descriptions.Item>
            <Descriptions.Item label='Province'>
              {province_name}
            </Descriptions.Item>
            <Descriptions.Item label='Village'>
              {village_name}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row gutter={[8, 32]}>
        <Col span={16} offset={4}>
          <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={
              'pk.eyJ1IjoiaHRyYW4yIiwiYSI6ImNrMmdmeWM2dDB1amkzY3AwNWgwNHRteXUifQ.jG0OQ6bMhr-sZYMkdj3H6w'
            }
            mapStyle='mapbox://styles/htran2/ck2gg912i09dt1cnhtuu1ar2u'
            onViewportChange={viewport => {
              setViewport(viewport)
            }}
          >
            <Marker key={physical_id} latitude={latitude} longitude={longitude}>
              {status === 0 || status == null ? (
                <img src={notFunctioning} alt='not functioning icon' />
              ) : status === 1 ? (
                <img src={unknown} alt='unknown icon' />
              ) : (
                <img src={functioning} alt='functioning icon' />
              )}
            </Marker>
          </ReactMapGl>
        </Col>
      </Row> */}
    </div>
  )
}

export default MonitorDetails

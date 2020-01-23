import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'

import { Bar,Line } from 'react-chartjs-2'
import { Row, Col, Descriptions, Badge, Button, Icon, Typography } from 'antd'


import 'antd/dist/antd.css'
import './MonitorDetail.css'
import HeatChart from 'components/HeatChart/heatChart'

import { useSelector, useDispatch } from 'react-redux'

import GoBack from '../components/Navbar/GoBack'

import OrganizationActivity from '../components/DashBoardComponents/OrganizationActivity'

//redux
import { deleteSensor } from '../actions/sensorActions'
import { fetchHistoryById, fetchSensorById } from 'actions/sensorHistory'


const { Title } = Typography

const MonitorDetails = props => {
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
      dispatch({type: 'CLEAR_SELECTED'})
    }
  }, [])

  console.log(historySelector.individualSensorHistory)

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



  return (

    
    <div>
      <HeatChart
         sensors={props.sensors}
         selectedPump={props.selectedSensors}
         history={historySelector.history}/>
      />
      <button  className="deleteMonitorDetails" onClick={deleteHandler}><i className="icon-trash"></i>Delete</button>
      <OrganizationActivity
        alertInfo={historySelector.alertInfo}
        individualSensor={historySelector.individualSensor[0]}
        individualSensorHistory={historySelector.individualSensorHistory}
      />
      <Row>
        <Col span={20} offset={4}>
          <Title>{physical_id}</Title>
        </Col>
      </Row>
      <Row gutter={[8, 32]}>
        <Col span={2}></Col>
        <Col span={1}>
          <GoBack/>
        </Col>
        <Col span={1}></Col>
        <Col span={8}>
          <Line
            data={{
              labels: date,
              datasets: [
                {
                  label: 'First Pad Count',
                  borderColor: '#6ba8a9',
                  data: firstPadCount,
                },
                {
                  label: 'Second Pad Count',
                  borderColor: '#3bb4c1',
                  data: secondPadCount,
                },
                {
                  label: 'Third Pad Count',
                  borderColor: '#e9e4e6',
                  data: thirdPadCount,
                },
                {
                  label: 'Fourth Pad Count',
                  backgroundColor: '#f6f5f5',
                  data: fourthPadCount,
                },
              ],
            }}
          />
        </Col>

        <Col span={8}>

          <Line
            data={{
              labels: date,
              datasets: [
                {
                  label: 'First Pad Second',
                  data: firstPadSecond,
                },
                {
                  label: 'Second Pad Second',
                  data: secondPadSecond,
                },
                {
                  label: 'Third Pad Second',
                  data: thirdPadSecond,
                },
                {
                  label: 'Fourth Pad Second',
                  data: fourthPadSecond,
                },
              ],
            }}
          />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row gutter={[8, 32]}>
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
      </Row>
    </div>
  )
}

export default MonitorDetails

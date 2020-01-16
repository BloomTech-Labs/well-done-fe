import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Row, Col, Descriptions, Badge, Button, Icon, Typography } from 'antd'
import 'antd/dist/antd.css'
import './MonitorDetail.css'
import { useSelector, useDispatch } from 'react-redux'

import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'
import OrganizationActivity from '../components/DashBoardComponents/OrganizationActivity'

//redux
import { deleteSensor } from '../actions/sensorActions'
import { fetchHistoryById } from 'actions/sensorHistory'
import { fetchSensors } from 'actions/sensorActions'

const { Title } = Typography

const MonitorDetails = props => {
  const [viewport, setViewport] = useState({
    latitude: 13.5651,
    longitude: 104.7538,
    width: '100%',
    height: '40vh',
    zoom: 7,
  })

  const [history, setHistory] = useState([])

  const sensorSelector = useSelector(state => state.sensorReducer)
  const historySelector = useSelector(state => state.historyReducer)
  const dispatch = useDispatch()

  let selectedSensor = localStorage.getItem('sensor')

  useEffect(() => {
    dispatch(fetchHistoryById(selectedSensor))
  }, [])

  const {
    sensor_index,
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
  } = historySelector.individualSensor

  const padHistory = historySelector.individualSensorHistory

  console.log(historySelector.individualSensor)

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

  if (historySelector.individualSensorHistory.length === 0) {
    return <div>loading...</div>
  }
  return (
    <div>
      <OrganizationActivity
        alertInfo={historySelector.alertInfo}
        selectedPump={props.selectedPump}
        setSelectedPump={props.setSelectedPump}
        sensors={sensorSelector.sensors}
      />
      <Row>
        <Col span={20} offset={4}>
          <Title>{physical_id}</Title>
        </Col>
      </Row>
      <Row gutter={[8, 32]}>
        <Col span={2}></Col>
        <Col span={1}>
          <Link to={{ pathname: '/dashboard' }}>
            <Button type='primary' shape='circle'>
              <Icon type='left' />
            </Button>
          </Link>
        </Col>
        <Col span={1}></Col>
        <Col span={8}>
          <Bar
            data={{
              labels: date,
              datasets: [
                {
                  label: 'First Pad Count',
                  backgroundColor: '#6ba8a9',
                  data: firstPadCount,
                },
                {
                  label: 'Second Pad Count',
                  backgroundColor: '#3bb4c1',
                  data: secondPadCount,
                },
                {
                  label: 'Third Pad Count',
                  backgroundColor: '#e9e4e6',
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
          <Bar
            data={{
              labels: date,
              datasets: [
                {
                  label: 'First Pad Second',
                  backgroundColor: '#6ba8a9',
                  data: firstPadSecond,
                },
                {
                  label: 'Second Pad Second',
                  backgroundColor: '#3bb4c1',
                  data: secondPadSecond,
                },
                {
                  label: 'Third Pad Second',
                  backgroundColor: '#e9e4e6',
                  data: thirdPadSecond,
                },
                {
                  label: 'Fourth Pad Second',
                  backgroundColor: '#f6f5f5',
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
            {/* <Marker key={physical_id} latitude={latitude} longitude={longitude}>
              {status === 0 || status == null ? (
                <img src={notFunctioning} alt='not functioning icon' />
              ) : status === 1 ? (
                <img src={unknown} alt='unknown icon' />
              ) : (
                <img src={functioning} alt='functioning icon' />
              )}
            </Marker> */}
          </ReactMapGl>
        </Col>
      </Row>
    </div>
  )
}

export default MonitorDetails

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PopupInfo.styles.scss'
import { FiHelpCircle, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'
import PumpInDetails from '../PumpInDetails/PumpInDetails.component'

const PopupInfo = props => {
  const [recentStatus, setRecentStatus] = useState({})

  useEffect(() => {
    AxiosWithAuth()
      .get(
        `${process.env.REACT_APP_HEROKU_API}/api/sensors/recent/sensor_id/${props.selectedPump.sensor_pid}`
      )
      .then(res => {
        setRecentStatus(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [props.selectedPump])

  function showPumpIcon(recentStatus) {
    for (let i = 0; i < recentStatus.length; i++) {
      if (recentStatus[i].status == null || recentStatus[i].status == 0) {
        return (
          <div className='nonFunc-back-icon'>
            <FiAlertCircle className='nonFunc-front-icon' />
          </div>
        )
      } else if (recentStatus[i].status == 1) {
        return (
          <div className='unknown-back-icon'>
            <FiHelpCircle className='unknown-front-icon' />
          </div>
        )
      } else if (recentStatus[i].status == 2) {
        return (
          <div className='func-back-icon'>
            <FiCheckCircle className='func-front-icon' />
          </div>
        )
      }
    }
  }

  return (
    <div className='popupInfo'>
      <div className='pump_id'>
        {showPumpIcon(recentStatus)}
        <p className='pump_num'>Pump {props.selectedPump.sensor_pid}</p>
      </div>
      <div className='pump_info'>
        <div className='spread'>
          {props.sensors.map(data => {
            if (data.status == null || data.status == 0) {
              return <div key={data.history_index} className='spread-red'></div>
            } else if (data.status == 1) {
              return (
                <div key={data.history_index} className='spread-yellow'></div>
              )
            } else if (data.status == 2) {
              return (
                <div key={data.history_index} className='spread-green'></div>
              )
            }
          })}
        </div>
        <h3>{props.selectedPump.country_name}</h3>
        <p className='province_name'>{props.selectedPump.province_name}</p>
        <Link to={history => ({ ...history, pathname: '/monitorDetails' })}>
          <p className='link'>More details</p>
        </Link>
      </div>
    </div>
  )
}

export default PopupInfo

import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import { Line, Pie, Bar, Polar } from 'react-chartjs-2'
import { Tabs, Row, Col, Descriptions, Badge, Button, Icon } from 'antd'
import 'antd/dist/antd.css'
import './MonitorDetail.css'
const { TabPane } = Tabs

const MonitorDetails = props => {
  const [viewport, setViewport] = useState({
    latitude: 13.5651,
    longitude: 104.7538,
    width: '100%',
    height: '30vh',
    zoom: 7,
  })

  return (
    <>
      <Tabs
        activeKey={props.selectedPump.physical_id}
        tabPosition='left'
        style={{ height: 800 }}
      >
        {props.sensors.map(data1 => {
          const data3 = props.history.filter(data2 => {
            return data1.physical_id == data2.sensor_id
          })
          const date = []
          const firstPadCount = []
          const secondPadCount = []
          const thirdPadCount = []
          const fourthPadCount = []
          const firstPadSecond = []
          const secondPadSecond = []
          const thirdPadSecond = []
          const fourthPadSecond = []
          data3.map(data4 => {
            date.push(data4.date)
            firstPadCount.push(data4.pad_count_0)
            secondPadCount.push(data4.pad_count_1)
            thirdPadCount.push(data4.pad_count_2)
            fourthPadCount.push(data4.pad_count_3)
            firstPadSecond.push(data4.pad_seconds_0)
            secondPadSecond.push(data4.pad_seconds_1)
            thirdPadSecond.push(data4.pad_seconds_2)
            fourthPadSecond.push(data4.pad_seconds_3)
          })
          return (
            <TabPane
              value={data1.physical_id}
              tab={data1.physical_id}
              key={data1.physical_id}
            >
              <div>
                <Row gutter={[8, 32]}>
                  <Col span={2}></Col>
                  <Col span={1}>
                    <Button type='primary' href='/dashboard'>
                      <Icon type='left' />
                      Go back
                    </Button>
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
                      title={props.selectedPump.physical_id}
                      layout='vertical'
                      bordered
                      column={{ xxl: 9 }}
                    >
                      <Descriptions.Item label='Status'>
                        {data1.status == 2 ? (
                          <Badge status='processing' text='Running' />
                        ) : (
                          <Badge status='error' text='Not Running' />
                        )}
                      </Descriptions.Item>
                      <Descriptions.Item label='Constructed'>
                        {data1.data_finished}
                      </Descriptions.Item>
                      <Descriptions.Item label='Depth'>
                        {data1.depth}
                      </Descriptions.Item>
                      <Descriptions.Item label='Sensor'>
                        {data1.physical_id}
                      </Descriptions.Item>
                      <Descriptions.Item label='Percent'>
                        {data1.reported_percent}
                      </Descriptions.Item>
                      <Descriptions.Item label='Total'>
                        {data1.total}
                      </Descriptions.Item>
                      <Descriptions.Item label='Commune'>
                        {data1.commune_name}
                      </Descriptions.Item>
                      <Descriptions.Item label='Province'>
                        {data1.province_name}
                      </Descriptions.Item>
                      <Descriptions.Item label='Village'>
                        {data1.village_name}
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
                      <Marker
                        key={data1.physical_id}
                        latitude={data1.latitude}
                        longitude={data1.longitude}
                      >
                        {data1.status == 2 ? (
                          <img
                            src='https://res.cloudinary.com/dfulxq7so/image/upload/v1573056725/Vector_1_xzgama.png'
                            alt='water icon'
                          />
                        ) : (
                          <img
                            src='https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png'
                            alt='water icon'
                          />
                        )}
                      </Marker>
                    </ReactMapGl>
                  </Col>
                </Row>
              </div>
            </TabPane>
          )
        })}
      </Tabs>
    </>
  )
}

export default MonitorDetails

import React from 'react'
import SignIn from '../components/SignIn/SignIn.component'
import './Landing.styles.scss'
import MetaTags from 'react-meta-tags'

const Landing = props => {
  return (
    <div className='landing'>
      <MetaTags>
        <title>Well-Done dashboard</title>
        <meta
          name='description'
          content='WellDone with its mission to consistently deliver clean, safe water to communities in need as well as provide long term accountability for infrastructure projects, provide water not just a well, they want to improve a dashboard by having our Lambda Labs team to build BackEnd from scratch and iterate FrontEnd features.'
        />
        <meta property='og:title' content='Well-Done' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dfulxq7so/image/upload/v1573914589/Screen_Shot_2019-11-16_at_6.29.30_AM_oq7itf.png'
        />
      </MetaTags>
      <div className='signinimage'>
        <img
          src='https://res.cloudinary.com/dfulxq7so/image/upload/v1572452572/malawi20100165_cesh8j.jpg'
          alt='main image'
        />
      </div>
      <div className='sign-in'>
        <SignIn history={props.history} />
      </div>
    </div>
  )
}

export default Landing

import React, { useState } from 'react'
import axios from 'axios'
import './SignIn.styles.scss'

const SignIn = props => {
  const [account, setAccount] = useState({ email_address: '', password: '' })

  const handleChange = event => {
    setAccount({ ...account, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post(`${process.env.REACT_APP_HEROKU_API}/api/auth/login`, account)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data.id)
        props.history.push('/dashboard')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='signinbody'>
      <h1 className='welcome'>Welcome </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type='email'
            name='email_address'
            placeholder='Email Address'
            value={account.email_address}
            // onChange= {event => {
            //   setEmail(event.target.value)
            // }}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={account.password}
            // onChange= {event => {
            //   setPassword(event.target.value)
            // }}
            onChange={handleChange}
          />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn

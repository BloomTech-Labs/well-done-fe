import React, { useState } from 'react'
import { Row, Col, Descriptions, Badge, Typography } from 'antd'
import ReactMapGl, { Marker } from 'react-map-gl'
import GoBack from '../components/Navbar/GoBack'
import './MonitorDetailHeader.scss'

function MonitorDetailHeader(props) {
  const [viewport, setViewport] = useState({
    latitude: 13.5651,
    longitude: 104.7538,
    width: '100%',
    height: '40vh',
    zoom: 7,
  })

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
  } = props.historySelector[0]

  const unknown =
    'https://res.cloudinary.com/dfulxq7so/image/upload/v1573056729/Vector_q9ihvh.png'
  const notFunctioning =
    'https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png'
  const functioning =
    'https://res.cloudinary.com/dfulxq7so/image/upload/v1573056725/Vector_1_xzgama.png'

  return (
    <>
      <div className='mainHeaderContainer'>
     <div className='backButton'>
      <GoBack />
     </div>
        <div className='headerLeftContainer'>
          <div className='status'>
            <h1>{physical_id}</h1>
            <Descriptions.Item label='Status'>
              {status === 0 || status === null ? (
                <Badge status='error' text='Not Functioning' />
              ) : status === 1 ? (
                <Badge status='warning' text='Unknown' />
              ) : (
                <Badge status='success' text='Functioning' />
              )}
            </Descriptions.Item>
          </div>
          <div className='location'>
            <h2>{province_name}</h2>
            <h3>{commune_name}</h3>
          </div>
          <div className='wellContainer'>
            <h3>Well</h3>
            <div className='wellInfoContainer'>
              <div className='wellConstructed'>
              <p>Constructed</p>
              <h6>{data_finished}</h6>
              </div>
              <div className='wellDepth'>
              <p>Well Depth</p>
              <h6>{depth}</h6>
              </div>
              <div className='wellCommune'>
              <p>Commune</p>
              <h6>{commune_name}</h6>
              </div>
              <div className='wellTotal'>
              <p>Total</p>
              <h6>{total}</h6>
              </div>
              <div className='wellProvince'>
              <p>Province</p>
              <h6>{province_name}</h6>
              </div>
            </div>
          </div>
        </div>
         <div className='mapContainer'>
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
                key={physical_id}
                latitude={latitude}
                longitude={longitude}
              >
                {status === 0 || status == null ? (
                  <img src={notFunctioning} alt='not functioning icon' />
                ) : status === 1 ? (
                  <img src={unknown} alt='unknown icon' />
                ) : (
                  <img src={functioning} alt='functioning icon' />
                )}
              </Marker>
            </ReactMapGl>

         </div>
      </div>


      {/*old data */}
      {/* <div>
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
          <Col span={4} offset={4}>
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
                key={physical_id}
                latitude={latitude}
                longitude={longitude}
              >
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
      </div> */}
    </>
  )
}

export default MonitorDetailHeader

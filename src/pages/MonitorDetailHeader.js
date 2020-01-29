import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import GoBack from '../components/Navbar/GoBack'
import './MonitorDetailHeader.scss'
import functionalBadge from '../icons/Functional.svg'
import nonFuncBadge from '../icons/NonFunctioning.svg'
import unknownBadge from '../icons/Unknown.svg'
import moment from 'moment'

function MonitorDetailHeader(props) {
  const [viewport, setViewport] = useState({
    latitude: 13.5651,
    longitude: 104.7538,
    width: '100%',
    height: '100%',
    zoom: 6,
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

  let finishedDate = moment(data_finished).format('MM/DD/YYYY')

  const unknown =
    'https://res.cloudinary.com/dfulxq7so/image/upload/v1573056729/Vector_q9ihvh.png'
  const notFunctioning =
    'https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png'
  const functioning =
    'https://res.cloudinary.com/dfulxq7so/image/upload/v1573056725/Vector_1_xzgama.png'

  const statusBadge = () => {
    if (status === 0 || status === null) {
      return (
        <>
          <img src={nonFuncBadge} alt='functional badge'></img>
          <h1>{physical_id}</h1>
          <p>Not Functioning</p>
        </>
      )
    } else if (status === 1) {
      return (
        <>
          <img src={unknownBadge} alt='functional badge'></img>
          <h1>{physical_id}</h1>
          <p>Unknown</p>
        </>
      )
    } else {
      return (
        <>
          <img src={functionalBadge} alt='functional badge'></img>
          <h1>{physical_id}</h1>
          <p>Functioning</p>
        </>
      )
    }
  }

  return (
    <>
      <div className='mainHeaderContainer'>
        <div className='backButton'>
          <GoBack />
        </div>
        <div className='headerLeftContainer'>
          <div className='status'>{statusBadge()}</div>
          <div className='location'>
            <h2>{province_name}</h2>
            <h3>{commune_name}</h3>
          </div>
          <div className='wellContainer'>
            <h3>Well</h3>
            <div className='wellInfoContainer'>
              <div className='wellConstructed'>
                <p>Constructed</p>
                <h6>{finishedDate}</h6>
              </div>
              <div className='wellProvince'>
                <p>Province</p>
                <h6>{province_name}</h6>
              </div>
              <div className='wellDepth'>
                <p>Well Depth</p>
                <h6>{depth}</h6>
              </div>
              <div className='wellCommune'>
                <p>Reported percent</p>
                <h6>{reported_percent}</h6>
              </div>
              <div className='wellTotal'>
                <p>Total</p>
                <h6>{total}</h6>
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
        </div>
      </div>
    </>
  )
}

export default MonitorDetailHeader

import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import GoBack from '../../components/Navbar/GoBack'
import './MonitorDetailHeader.scss'

import functionalBadge from 'icons/Functional.svg'
import nonFuncBadge from 'icons/NonFunctioning.svg'
import unknownBadge from 'icons/Unknown.svg'

import functionIcon from 'icons/NewMapMarkerFunctioning.svg'
import NonFunctioningIcon from 'icons/NewMapMarkerNonFunctioning.svg'
import NoDataIcon from 'icons/NewMapMarkerNoData.svg'

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
    commune_name,
    province_name,
    village_name,
    status,
    depth,
    latitude,
    longitude,
  } = props.historySelector[0]

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
            <h2>{village_name}</h2>
            <h3>{commune_name}</h3>
          </div>
          <div className='wellContainer'>
            <h3 className='wellTitle'>Well</h3>
            <div className='wellInfoContainer'>
              <div className='wellConstructed'>
                <p className='wellInfoP'>Installed</p>
                <h4>{data_finished}</h4>
              </div>
              <div className='wellDepth'>
                <p className='wellInfoP'>Well Depth</p>
                <h4>{depth}</h4>
              </div>
              <div className='wellProvince'>
                <p className='wellInfoP'>Province</p>
                <h4>{province_name}</h4>
              </div>
              <div className='wellCommune'>
                <p className='wellInfoP'>Status</p>
                <p>
                  {status === 0 || status == null ? (
                    <h4>Non-Functioning</h4>
                  ) : status === 1 ? (
                    <h4>Unknown</h4>
                  ) : (
                    <h4>Functional</h4>
                  )}
                </p>
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
                <img src={NonFunctioningIcon} alt='not functioning icon' />
              ) : status === 1 ? (
                <img src={NoDataIcon} alt='unknown icon' />
              ) : (
                <img src={functionIcon} alt='functioning icon' />
              )}
            </Marker>
          </ReactMapGl>
        </div>
      </div>
    </>
  )
}

export default MonitorDetailHeader

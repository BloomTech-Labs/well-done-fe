import React, { useEffect } from 'react'
import ReactMapGl, { Popup } from 'react-map-gl'
import './Map.styles.scss'
import PopupInfo from '../PopupInfo/PopupInfo.component'
import Pin from '../Pin/Pin.component'

export default function Map(props) {

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        props.setSelectedPump(null)
      } 
    }
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [props])

  return (
    <div className='mapsContainer'>
        <ReactMapGl
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle='mapbox://styles/htran2/ck2gg912i09dt1cnhtuu1ar2u'
          onViewportChange={viewport => {
            props.setViewport(viewport)
          }}
          {...props.viewport}
        >
          <Pin
            sensors={props.sensors}
            setSelectedPump={props.setSelectedPump}
            funcToggle={props.funcToggle}
            nonFuncToggle={props.nonFuncToggle}
            unknownToggle={props.unknownToggle}
            pumps={props.pumps}
          />

          {props.selectedPump ? (
            <Popup
              className='popupCard'
              latitude={props.selectedPump.latitude}
              longitude={props.selectedPump.longitude}
              onClose={() => {
                props.setSelectedPump(null)
              }}
              closeOnClick={false}
            >
              <PopupInfo
                sensors={props.sensors}
                selectedPump={props.selectedPump}
                history={props.history}
              />
            </Popup>
          ) : null}
        </ReactMapGl>
    </div>
  )
}

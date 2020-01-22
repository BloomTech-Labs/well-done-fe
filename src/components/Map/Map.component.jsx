import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CLEAR_SELECTED } from 'actions/selectedSensorsActions'
import ReactMapGl, { Popup } from 'react-map-gl'
import MapGL, { NavigationControl, FullscreenControl} from 'react-map-gl';
import './Map.styles.scss'
import PopupInfo from '../PopupInfo/PopupInfo.component'
import Pin from '../Pin/Pin.component'

export default function Map(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        dispatch({type: CLEAR_SELECTED})
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
          {/* for each sensor create a pin to display on map */}
          <Pin
            sensors={props.sensors}
            setSelectedPump={props.setSelectedPump}
            funcToggle={props.funcToggle}
            nonFuncToggle={props.nonFuncToggle}
            unknownToggle={props.unknownToggle}
          />

          {props.selectedPump ? (
            <Popup
              className='popupCard'
              latitude={props.selectedPump.latitude}
              longitude={props.selectedPump.longitude}
              onClose={() => {
                dispatch({type: CLEAR_SELECTED})
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
          
          <div className="navStyle">
          <NavigationControl />
         </div>
         
        </ReactMapGl>
    </div>
  )
}

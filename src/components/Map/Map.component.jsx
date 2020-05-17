import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLEAR_SELECTED, handleSelected } from 'actions/selectedSensorsActions'
import ReactMapGl, { Popup } from 'react-map-gl'
import MapGL, { NavigationControl, FullscreenControl } from 'react-map-gl'
import useOnClickOutside from 'use-onclickoutside'

import './Map.styles.scss'
import PopupInfo from '../PopupInfo/PopupInfo.component'
import Pin from '../Pin/Pin.component'

export default function Map(props) {
  const currentlySelected = useSelector(
    state => state.selectedSensors.currentlySelected
  )

  const [bool, setBool] = useState(false)
  const popUpRef = useRef(null)

  const dispatch = useDispatch()
  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        dispatch({ type: CLEAR_SELECTED })
      }
    }

    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [props])

  useEffect(() => {
    const clickListener = async e => {
      console.log(bool)
      if (e && bool) {
        if (e.target.classList.contains('location-icon')) {
          return
        } else {
          setBool(false)
          dispatch({ type: CLEAR_SELECTED })
        }
      } else if (popUpRef.current) {
        setBool(true)
      }
    }

    window.addEventListener('click', clickListener)

    return () => {
      window.removeEventListener('click', clickListener)
    }
  }, [bool])

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
          currentlySelected={Object.keys(currentlySelected).length}
          sensors={props.sensors}
          funcToggle={props.funcToggle}
          nonFuncToggle={props.nonFuncToggle}
          unknownToggle={props.unknownToggle}
        />

        {Object.keys(currentlySelected).length > 0 ? (
          <Popup
            className='popupCard'
            latitude={currentlySelected.latitude}
            longitude={currentlySelected.longitude}
            onClose={() => {
              dispatch({ type: CLEAR_SELECTED })
            }}
            ref={popUpRef}
            closeOnClick={true}
          >
            <PopupInfo
              setBool={setBool}
              sensors={props.sensors}
              selectedPump={currentlySelected}
              history={props.history}
            />
          </Popup>
        ) : null}

        <div className='navStyle'>
          <NavigationControl />
        </div>
      </ReactMapGl>
    </div>
  )
}

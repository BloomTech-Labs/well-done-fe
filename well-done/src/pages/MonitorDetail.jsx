import React, {useState} from 'react';
import ReactMapGl, {Marker} from 'react-map-gl'
import Map from '../components/Map/Map.component'

const MonitorDetails = props => {

    const [viewport, setViewport] = useState({
        latitude: 13.5651,
        longitude: 104.7538,
        width: "30vw",
        height: "30vh",
        zoom: 8
    })

    return (
        <div>
            {/* <ReactMapGl 
                {...viewport}
                mapboxApiAccessToken={"pk.eyJ1IjoiaHRyYW4yIiwiYSI6ImNrMmdmeWM2dDB1amkzY3AwNWgwNHRteXUifQ.jG0OQ6bMhr-sZYMkdj3H6w"}
                mapStyle="mapbox://styles/htran2/ck2gg912i09dt1cnhtuu1ar2u"
                onViewportChange = {viewport => {
                    setViewport(viewport)
            }}
            >
                marker here
            </ReactMapGl> */}
            <Map
                sensors={props.sensors}
                viewport = {viewport}
                setViewport = {setViewport}
            />
        </div>
    )
}

export default MonitorDetails;
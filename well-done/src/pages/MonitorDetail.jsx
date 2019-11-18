import React, {useState} from 'react';
// import ReactMapGl, {Marker} from 'react-map-gl'
import Map from '../components/Map/Map.component'
import PumpInDetails from '../components/PumpInDetails/PumpInDetails.component';
import './MonitorDetails.style.scss'

const MonitorDetails = props => {
    console.log('props in MonitorDetails', props)

    const [viewport, setViewport] = useState({
        latitude: 13.5651,
        longitude: 104.7538,
        width: "50vw",
        height: "50vh",
        zoom: 8
    })

    return (
        <div className="monitor-page">

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
            <PumpInDetails selectedPump={props.selectedPump}/>
            <Map
                sensors={props.sensors}
                viewport = {viewport}
                setViewport = {setViewport}
            />
            
        </div>
    )
}

export default MonitorDetails;
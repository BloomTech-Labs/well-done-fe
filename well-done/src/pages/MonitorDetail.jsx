import React, {useState} from 'react';
import Map from '../components/Map/Map.component'
import PumpInDetails from '../components/PumpInDetails/PumpInDetails.component';
import Menu from '../components/Menu/Menu.component'
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
            <div className="menu">
                <Menu></Menu>
            </div>
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
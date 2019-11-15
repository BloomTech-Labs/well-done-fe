import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './statusSpread.styles.scss'


const StatusSpread = props => {
    console.log('props in StatusSpread', props)
    
    return (
        <div className="popupCard">
            <p className="pump_num">Pump # {props.selectedPump.sensor_pid}</p>
            <div className="pump_info">
                <div className="spread">
                    {props.sensors.map(data => {
                        if (data.status == null || data.status == 0){return <div key={data.history_index} className="spread-red"></div>}
                        else if (data.status == 1){return <div key={data.history_index} className="spread-yellow"></div>}
                        else if (data.status == 2){return <div key={data.history_index} className="spread-green"></div>}
                    })}
                </div>
                <h3>{props.selectedPump.country_name}</h3>
                <p className="province_name">{props.selectedPump.province_name}</p> 
                <Link to={history => ({...history, pathname:"/monitorDetails"})}>More details</Link>
            </div>
           

        </div>
    )
}

export default StatusSpread
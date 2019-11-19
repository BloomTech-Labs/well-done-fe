import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './PopupInfo.styles.scss'
import { FiHelpCircle, FiAlertCircle, FiCheckCircle } from "react-icons/fi"
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'

const PopupInfo = props => {
    console.log('props in StatusSpread', props)
    const [recentStatus, setRecentStatus] = useState({})

    useEffect(() => {
        AxiosWithAuth()
        .get(`https://welldone-db.herokuapp.com/api/sensors/recent/sensor_id/${props.selectedPump.sensor_pid}`)
        .then(res => 
            {
                console.log('get recent status', res.data)
                setRecentStatus(res.data)
            }
        )
        .catch(err => {
          console.log(err)
        })
      }, [props.selectedPump])
      
    console.log('recentStatus', recentStatus.length)

    function showPumpIcon(recentStatus) {
            for (let i=0; i<recentStatus.length;i++){
                if (recentStatus[i].status == null || recentStatus[i].status == 0) {
                    return (
                        <div className= "nonFunc-back-icon">
                            <FiAlertCircle className= "nonFunc-front-icon" />
                        </div>
                    )
                }
                else if (recentStatus[i].status == 1){
                    return (
                        <div className= "unknown-back-icon">
                            <FiHelpCircle className= "unknown-front-icon" />
                        </div>
                    )
                }
                else if (recentStatus[i].status == 2){
                    return (
                        <div className= "func-back-icon">
                            <FiCheckCircle className= "func-front-icon" />
                        </div>
                    )
                }
            }
        
    }
   

    return (
        <div className="popupInfo">
            <div className="pump_id">
                {showPumpIcon(recentStatus)}
                <p className="pump_num">Pump {props.selectedPump.sensor_pid}</p>
            </div>
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
                <Link to={history => ({...history, pathname:"/monitorDetails"})}><p className="link">More details</p></Link>
            </div>
           

        </div>
    )
}

export default PopupInfo
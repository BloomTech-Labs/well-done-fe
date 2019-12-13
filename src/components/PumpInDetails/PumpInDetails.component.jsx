import React from 'react'
import './PumpInDetails.styles.scss'

export default function PumpInDetails (props) {
    console.log('props in PumpInDetails', props)

    return (
        <div className="pump-details">
            <h1>{props.selectedPump.sensor_pid}</h1>
            <h3>{props.selectedPump.village_name}</h3>
            <p>{props.selectedPump.org_name}</p>
            <div className="data">
                <h4>Data</h4>
                <div className="details">
                    <p>Last upload</p>
                    <p>{props.selectedPump.date}</p>
                </div>
                <div className="details">
                    <p>Total upload</p>
                    <p>{props.selectedPump.history_index}</p>
                </div>
                <div className="details">
                    <p>Total liters</p>
                    <p>{props.selectedPump.yeild}</p>
                </div>
            </div>
            <div className="data">
                <h4>Well</h4>
                <div className="details">
                    <p>Constructed</p>
                    <p>{props.selectedPump.data_finished}</p>
                </div>
                <div className="details">
                    <p>Well Depth</p>
                    <p>{props.selectedPump.depth}</p>
                </div>
                <div className="details">
                    <p>Commune</p>
                    <p>{props.selectedPump.commune_name}</p>
                </div>
                <div className="details">
                    <p>District</p>
                    <p>{props.selectedPump.district_name}</p>
                </div>
                <div className="details">
                    <p>Province</p>
                    <p>{props.selectedPump.province_name}</p>
                </div>
                
            </div>
        </div>
    )
}
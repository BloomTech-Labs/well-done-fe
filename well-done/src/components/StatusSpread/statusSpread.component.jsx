import React, {useEffect} from 'react'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'
import './statusSpread.styles.scss'

const statusData = [
    {
        status: 2
    },
    {
        status: 1
    },
    {
        status: 2
    },
    {
        status: 2
    },
    {
        status: 2
    },
    {
        status: 1
    },
    {
        status: 2
    },
    {
        status: 2
    },
    {
        status: 1
    },
    {
        status: 1
    },
    {
        status: 1
    },
    {
        status: 1
    },
    {
        status: 0
    },
    {
        status: 0
    },
    {
        status: 0
    },
    {
        status: 0
    },
    {
        status: 2
    },
]

const StatusSpread = props => {
    console.log('props in StatusSpread', props)

    // useEffect(() => {
    //     AxiosWithAuth()
    //             .get(`https://welldone-db.herokuapp.com/api/sensors/histories/${props.selectedPump.physical_id}`)
    //             .then(res => {
    //                 console.log(res.data)
    //             })

    // })

    return (
        <div>
            <div class="spread">
                {statusData.map(data => {
                    if (data.status == 0){return <div class="spread-red"></div>}
                    else if (data.status == 1){return <div class="spread-yellow"></div>}
                    else if (data.status == 2){return <div class="spread-green"></div>}
                })}
            </div>
            <h2>{props.selectedPump.country_name}</h2>
            {/* <p>{selectedPump.province_name}</p> */}
            <p>Pump # {props.selectedPump.sensor_pid}</p>

        </div>
    )
}

export default StatusSpread
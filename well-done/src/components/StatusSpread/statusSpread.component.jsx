import React, {useEffect} from 'react'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'

const StatusSpread = props => {
    console.log('props in StatusSpread', props)

    useEffect(() => {
        AxiosWithAuth()
                .get(`https://welldone-db.herokuapp.com/api/sensors/histories/${props.selectedPump.physical_id}`)
                .then(res => {
                    console.log(res.data)
                })

    })

    return (
        <div></div>
    )
}

export default StatusSpread
import React, {useState, useEffect} from 'react'
import './Filter.styles.scss'
import FuncToggle from '../Toggle/FuncToggle.component'
import NonFuncToggle from '../Toggle/NonFuncToggle.component'
import UnknownToggle from '../Toggle/UnknownToggle.component'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'

const Filter = props => {
    const [pumps, setPumps] = useState([])
    
    useEffect(() => {
        AxiosWithAuth()
            .get("https://welldone-db.herokuapp.com/api/pumps")
            .then(res => {
                // console.log(res)
                setPumps(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [ ])

    const handleChange = event => {
        console.log('handleChange in filter', event.target.value)
        if (event.target.value.length !== 0){
            let filtered = pumps.filter(pump => pump.village_name.toLowerCase().includes(event.target.value.toLowerCase()))
            props.setSearchFiltered(filtered)
        }
    }

    return (
        <div class="filter">
            <h4>Village</h4>
            <select className="select-village" onChange={handleChange}> 
                {pumps.map(pump => 
                    (<option value={pump.village_name} key={pump.sensor_pid}>{pump.village_name}</option>)
                )} 
            </select>

            <h4>Status</h4>
            <div class="pump-type">
                <p>Functional</p>
                <FuncToggle 
                    sensors={props.sensors}
                    setFuncToggle={props.setFuncToggle}
                />
            </div>
            <div class="pump-type">
                <p>Unknown</p>
                <UnknownToggle 
                    sensors={props.sensors}
                    setUnknownToggle={props.setUnknownToggle}
                />
            </div>
            <div class="pump-type">
                <p>Non-Functional</p>
                <NonFuncToggle 
                    sensors={props.sensors}
                    setNonFuncToggle={props.setNonFuncToggle}
                />
            </div>
        </div>
    )
}

export default Filter

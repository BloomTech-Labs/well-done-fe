import React, {useState, useEffect} from 'react'
import './Search.styles.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'

const Search = (props) => {
    console.log('props in Search', props)
    const [searchValue, setSearchValue] = useState("")
    const [pumps, setPumps] = useState([])

    console.log('props in Search', props)

    useEffect(() => {
        AxiosWithAuth()
            .get("https://welldone-db.herokuapp.com/api/pumps")
            .then(res => {
                // console.log(res)
                setPumps(res.data)
            })
    }, [ ])
    
    const handleChange = event => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
        if (searchValue.length !== 0){
            console.log('searchValue In', event.target.value)
            
            let filtered = pumps.filter(pump => 
                
                // console.log('sensorPID', pump.sensor_pid)
                (pump.country_name.toLowerCase().includes(event.target.value.toLowerCase()) )
                // {
                    // console.log('searchValue', searchValue, 'sensor_pid', pump.sensor_pid)
                // }
                || (pump.sensor_pid == event.target.value)
                
                
            )
            props.setSearchFiltered(filtered)
            console.log('searchFiltered', props.searchFiltered)
            console.log('filtered', filtered)
        }
    }

    return (
        <div class="search">
            {/* <h1>Test the search bar</h1> */}
            <input 
                // class="search"
                type="text"
                placeholder="Search location or pump"
                onChange={handleChange}
            />
            <div class="filtered">
            {props.searchFiltered.map(place =>
                (<h2>{place.country_name}</h2>))}
            </div>
            {/* <button type="submit"><i class="fa fa-search"></i></button> */}
        </div>
    )
}

export default Search;
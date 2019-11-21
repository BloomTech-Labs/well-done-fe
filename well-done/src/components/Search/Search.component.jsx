import React, {useState, useEffect} from 'react'
import './Search.styles.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'

const Search = (props) => {
    // console.log('props in Search', props)
    
    const handleChange = event => {
        console.log('event target', event.target.value)
        // setSearchValue(event.target.value)
        // console.log('searchValue length', searchValue.length)
        if (event.target.value.length !== 0){
            console.log('searchValue In', event.target.value)
            let filtered = props.sensors.filter(pump => 
                (pump.village_name.toLowerCase().includes(event.target.value.toLowerCase()) )
                || (pump.sensor_pid == event.target.value)
            )
            props.setSearchFiltered(filtered)
        }
        else {
            props.setViewport({
                latitude: 13.5651,
                longitude: 104.7538,
                width: "100vw",
                height: "100vh",
                zoom: 8
            })
        }
    }

    return (
        <div className="search">
            <input 
                // class="search"
                type="text"
                placeholder="Search village or sensor physical ID"
                onChange={handleChange}
            />
            <div className="filtered">
            {props.searchFiltered.map(place =>
                (<h2>{place.village_name}</h2>))}
            </div>
        </div>
    )
}

export default Search;
import React, {useState, useEffect} from 'react'
import './Search.styles.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'

const Search = (props) => {
    // console.log('props in Search', props)
    const [pumps, setPumps] = useState([])
    // const [searchValue, setSearchValue] = useState("")

    // console.log('props in Search', props)

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
        console.log('event target', event.target.value)
        // setSearchValue(event.target.value)
        // console.log('searchValue length', searchValue.length)
        if (event.target.value.length !== 0){
            console.log('searchValue In', event.target.value)
            let filtered = pumps.filter(pump => 
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
            {/* <h1>Test the search bar</h1> */}
            <input 
                // class="search"
                type="text"
                placeholder="Search location or sensor physical ID"
                onChange={handleChange}
            />
            <div className="filtered">
            {props.searchFiltered.map(place =>
                (<h2>{place.village_name}</h2>))}
            </div>
            {/* <button type="submit"><i class="fa fa-search"></i></button> */}
        </div>
    )
}

export default Search;
import React, {useState} from 'react'
import './Search.styles.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("")

    console.log('props in Search', props)
    
    const handleChange = event => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
        if (searchValue.length >0){
            console.log('length', searchValue.length)
            let filtered = props.PumpData.filter(pump => pump.country_name.toLowerCase().includes(searchValue.toLowerCase()))
            props.setSearchFiltered(filtered)
            console.log('searchFiltered', props.searchFiltered)
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
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>
    )
}

export default Search;
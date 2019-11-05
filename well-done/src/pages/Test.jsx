import React from 'react'
import Search from '../components/Search/Search.component'
import Filter from '../components/Filter/Filter.component'

const Test = (props) => {
    console.log('props in Test', props)


    return (
        <div>
            <Search 
                PumpData={props.PumpData} 
                searchFiltered={props.searchFiltered} 
                setSearchFiltered={props.setSearchFiltered}
            />
            {/* <p>Test</p> */}

            {props.searchFiltered.map(item => (
                <p>Country Name: {item.country_name}</p>
            ))}
            
            <Filter/>
        </div>
    )
}

export default Test;
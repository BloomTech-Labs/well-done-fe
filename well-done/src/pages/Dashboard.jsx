import React from 'react'
import Menu from '../components/Menu/Menu.component'
import Map from '../components/Map/Map2.component'
import Search from '../components/Search/Search.component'
import Filter from '../components/Filter/Filter.component'

const Dashboard = props => {
    console.log('props in Dashboard', props)

    return (
        <div class="dashboard">
            <Menu />
            <Map
                searchFiltered={props.searchFiltered} 
                sensors={props.sensors}
            />
            <Search 
                searchFiltered={props.searchFiltered}
                setSearchFiltered={props.setSearchFiltered}
                 
            />
            <Filter 
                searchFiltered={props.searchFiltered}
                setSearchFiltered={props.setSearchFiltered}
                sensors={props.sensors}
            />
        </div>
    )
}

export default Dashboard;
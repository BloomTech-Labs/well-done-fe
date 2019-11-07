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
            <Map />
            <Search />
            <Filter />
        </div>
    )
}

export default Dashboard;
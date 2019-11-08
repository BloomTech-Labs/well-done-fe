import React, {useState} from 'react'
import Menu from '../components/Menu/Menu.component'
import Map from '../components/Map/Map2.component'
import Search from '../components/Search/Search.component'
import Filter from '../components/Filter/Filter.component'

const Dashboard = props => {
    console.log('props in Dashboard', props)
    const [funcToggle, setFuncToggle] = useState(true)
    const [nonFuncToggle, setNonFuncToggle] = useState(true)
    const [unknownToggle, setUnknownToggle] = useState(true)

    console.log('funcToggle', funcToggle)
    console.log('nonFuncToggle', nonFuncToggle)
    console.log('unknownToggle', unknownToggle)

    return (
        <div class="dashboard">
            <Menu />
            <Map
                searchFiltered={props.searchFiltered} 
                sensors={props.sensors}
                funcToggle={funcToggle}
                nonFuncToggle={nonFuncToggle}
                unknownToggle={unknownToggle}
            />
            <Search 
                searchFiltered={props.searchFiltered}
                setSearchFiltered={props.setSearchFiltered}
                 
            />
            <Filter 
                searchFiltered={props.searchFiltered}
                setSearchFiltered={props.setSearchFiltered}
                sensors={props.sensors}
                setFuncToggle={setFuncToggle}
                setNonFuncToggle={setNonFuncToggle}
                setUnknownToggle={setUnknownToggle}
            />
        </div>
    )
}

export default Dashboard;
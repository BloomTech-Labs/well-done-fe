import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu/Menu.component'
import Map from '../components/Map/Map.component'
import Search from '../components/Search/Search.component'
import Filter from '../components/Filter/Filter.component'


const Dashboard = props => {
    console.log('props in Dashboard', props)
    const [viewport, setViewport] = useState({
        latitude: 13.5651,
        longitude: 104.7538,
        width: "100vw",
        height: "100vh",
        zoom: 8
    })
    const [funcToggle, setFuncToggle] = useState(true)
    const [nonFuncToggle, setNonFuncToggle] = useState(true)
    const [unknownToggle, setUnknownToggle] = useState(true)

    const zoomInto = () => {
        console.log('checkkk', props.searchFiltered.length)
        // props.searchFiltered[0].map(place => {
        if (props.searchFiltered.length == 0){
                setViewport({
                    latitude: 13.5651,
                    longitude: 104.7538,
                    width: "100vw",
                    height: "100vh",
                    zoom: 8
                })
            }
        else if(props.searchFiltered.length == 1){
            const searchedPlace = {
                latitude: props.searchFiltered[0].latitude,
                longitude: props.searchFiltered[0].longitude,
                width: "100vw",
                height: "100vh",
                zoom: 11
            }
            console.log('searchPlace one', searchedPlace)
            setViewport(searchedPlace)  
        }
        else if(props.searchFiltered.length > 1) {
            function avgCoordinate(arr){
                var totalLat = 0
                var totalLon = 0
                for (let i=0; i<arr.length; i++){
                    totalLat += arr[i].latitude
                    totalLon += arr[i].longitude
                }
                const avgLat = totalLat/arr.length;
                const avgLon = totalLon/arr.length;
                return [avgLat, avgLon]
            }
            const searchedPlace = {
                    latitude: avgCoordinate(props.searchFiltered)[0],
                    longitude: avgCoordinate(props.searchFiltered)[1],
                    width: "100vw",
                    height: "100vh",
                    zoom: 11
                }
            console.log('searchPlace many', searchedPlace)
            setViewport(searchedPlace)
            }
    }

    useEffect(() => {
        zoomInto()
    }, [props.searchFiltered])

    return (
        <div class="dashboard">
            <Menu />
            <Map
                sensors = {props.sensors}
                funcToggle = {funcToggle}
                nonFuncToggle = {nonFuncToggle}
                unknownToggle = {unknownToggle}
                viewport = {viewport}
                setViewport = {setViewport}
                history = {props.history}
                selectedPump = {props.selectedPump}
                setSelectedPump = {props.setSelectedPump}
            />
            <Search 
                searchFiltered = {props.searchFiltered}
                setSearchFiltered = {props.setSearchFiltered}
                viewport = {viewport}
                setViewport = {setViewport}
                sensors = {props.sensors}
            />
            <Filter 
                searchFiltered = {props.searchFiltered}
                setSearchFiltered = {props.setSearchFiltered}
                sensors = {props.sensors}
                setFuncToggle = {setFuncToggle}
                setNonFuncToggle = {setNonFuncToggle}
                setUnknownToggle = {setUnknownToggle}
            />
            
        </div>
    )
}

export default Dashboard;

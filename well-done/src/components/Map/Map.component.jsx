import React, {useState, useEffect} from 'react';
import ReactMapGl, {Popup} from 'react-map-gl'
import "./Map.styles.scss"
import StatusSpread from '../StatusSpread/statusSpread.component'
import Pin from '../Pin/Pin.component'

export default function Map(props){
    console.log('props in Map', props)

    const [selectedPump, setSelectedPump] = useState(null)

    const zoomInto = () => {
        console.log('checkkk', props.searchFiltered.length)
        // props.searchFiltered[0].map(place => {
        if (props.searchFiltered.length == 0){
                props.setViewport({
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
            props.setViewport(searchedPlace)  
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
            props.setViewport(searchedPlace)
            }
    }

    useEffect(() => {
        zoomInto()
    }, [props.searchFiltered])

    // console.log('viewport Out', viewport)

    // useEffect(() => {
    //     const listener = e => {
    //         console.log('here', e)
    //         if (e.key === "Escape"){
                 
    //             setSelectedPump(null)
    //         }
    //     };
    //     console.log('listener', listener)
    //     window.addEventListener("keydown", listener);

    //     return () => {
    //         window.removeEventListener("keydown", listener)
    //     }

    //  }, [])

    //  console.log('unknown check toggle status in Map', props.unknownToggle)
    //  console.log('nonFunc check toggle status in Map', props.nonFuncToggle)
    //  console.log('func check toggle status in Map', props.funcToggle)

    return <div>
        <ReactMapGl 
            {...props.viewport}
            mapboxApiAccessToken={"pk.eyJ1IjoiaHRyYW4yIiwiYSI6ImNrMmdmeWM2dDB1amkzY3AwNWgwNHRteXUifQ.jG0OQ6bMhr-sZYMkdj3H6w"}
            mapStyle="mapbox://styles/htran2/ck2gg912i09dt1cnhtuu1ar2u"
            onViewportChange = {viewport => {
                props.setViewport(viewport)
            }}
        >
            <Pin 
                sensors={props.sensors} 
                setSelectedPump={setSelectedPump}
                funcToggle={props.funcToggle}
                nonFuncToggle={props.nonFuncToggle}
                unknownToggle={props.unknownToggle}
            />
            

            {selectedPump ? (
                <Popup
                className = "popup"
                latitude={selectedPump.latitude}
                longitude={selectedPump.longitude}
                onClose={() => {
                    setSelectedPump(null)
                }}
                >
                    <StatusSpread selectedPump={selectedPump}/>
                </Popup>
            ) : null}

            

            {/* } */}
        </ReactMapGl>
        </div>;
}

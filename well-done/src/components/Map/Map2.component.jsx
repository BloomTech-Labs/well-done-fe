import React, {useState, useEffect} from 'react';
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import * as ChicagoPark from '../../chicago-parks.json'
import "./Map.styles.scss"
// import Axios from 'axios';
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'

export default function Map(props){
    // console.log('props in Map', props)
    const [viewport, setViewport] = useState({
        latitude: 13.5651,
        longitude: 104.7538,
        width: "100vw",
        height: "100vh",
        zoom: 8
    })

    const [pumps, setPumps] = useState([])
    // const [sensorPid, setSensorPid] = useState(0)
    const [selectedPump, setSelectedPump] = useState(null)

    const zoomInto = () => {
        console.log('checkkk', props.searchFiltered[0])
        // props.searchFiltered[0].map(place => {
        if(props.searchFiltered.length !== 0) {
        const searchedPlace = {
                    latitude: Math.floor(props.searchFiltered[0].latitude),
                    longitude: Math.floor(props.searchFiltered[0].longitude),
                    width: "100vw",
                    height: "100vh",
                    zoom: 8
                }
        console.log('searchPlace', searchedPlace)
        setViewport(searchedPlace)
            }
    }

    useEffect(() => {
        zoomInto()
    }, [props.searchFiltered])

    // console.log('viewport Out', viewport)

    useEffect(() => {
        const listener = e => {
            console.log('here', e)
            if (e.key === "Escape"){
                 
                setSelectedPump(null)
            }
        };
        console.log('listener', listener)
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener)
        }

     }, [ ])

    useEffect(() => {
        AxiosWithAuth()
        .get("https://welldone-db.herokuapp.com/api/sensors")
        .then(res => 
            {
                console.log('get all sensors', res.data)
                setPumps(res.data)
            }
        )
    })

    return <div>
        <ReactMapGl 
            {...viewport}
            mapboxApiAccessToken={"pk.eyJ1IjoiaHRyYW4yIiwiYSI6ImNrMmdmeWM2dDB1amkzY3AwNWgwNHRteXUifQ.jG0OQ6bMhr-sZYMkdj3H6w"}
            mapStyle="mapbox://styles/htran2/ck2gg912i09dt1cnhtuu1ar2u"
            onViewportChange = {viewport => {
                setViewport(viewport)
            }}
        >
            {pumps.map(pump => {
                if (pump.status == null){
                    return (<Marker
                        key={pump.id}
                        latitude={pump.latitude}
                        longitude={pump.longitude}
                        >      
                        <img onClick = { event => {
                            event.preventDefault()
                            setSelectedPump(pump)
                        }
                        }
                        class="location-icon" 
                        src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png" 
                        alt="location" />
               
                    </Marker>)
                }
                else if (pump.status == 0){
                    return (<Marker
                        key={pump.id}
                        latitude={pump.latitude}
                        longitude={pump.longitude}
                        >      
                        <img onClick = { event => {
                            event.preventDefault()
                            setSelectedPump(pump)
                        }
                        }
                        class="location-icon" 
                        src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png" 
                        alt="location" />
               
                    </Marker>)
                }
                else if (pump.status == 1){
                    return (<Marker
                        key={pump.id}
                        latitude={pump.latitude}
                        longitude={pump.longitude}
                        >      
                        <img onClick = { event => {
                            event.preventDefault()
                            setSelectedPump(pump)
                        }
                        }
                        class="location-icon" 
                        src="https://res.cloudinary.com/dfulxq7so/image/upload/v1573056729/Vector_q9ihvh.png" 
                        alt="location" />
               
                    </Marker>)
                }
                else {
                    return (<Marker
                        key={pump.id}
                        latitude={pump.latitude}
                        longitude={pump.longitude}
                        >      
                        <img onClick = { event => {
                            event.preventDefault()
                            setSelectedPump(pump)
                        }
                        }
                        class="location-icon" 
                        src="https://res.cloudinary.com/dfulxq7so/image/upload/v1573056725/Vector_1_xzgama.png" 
                        alt="location" />
               
                    </Marker>)
                }
            }
            
               
                
            )}

            {selectedPump ? (
                <Popup
                latitude={selectedPump.latitude}
                longitude={selectedPump.longitude}
                onClose={() => {
                    setSelectedPump(null)
                }}
                >
                    <div>
                        <h2>{selectedPump.country_name}</h2>
                        <p>{selectedPump.province_name}</p>
                    </div>
                </Popup>
            ) : null}

            

            {/* } */}
        </ReactMapGl>
        </div>;
}
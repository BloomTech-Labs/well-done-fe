import React, {useState} from 'react';
import ReactMapGl, {Marker} from 'react-map-gl'
import * as ChicagoPark from '../../chicago-parks.json'
import "./Map.styles.scss"

export default function Map(){
    const [viewport, setViewport] = useState({
        latitude: 41.8781,
        longitude: -87.6298,
        width: "100vw",
        height: "100vh",
        zoom: 10
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
            {ChicagoPark.features.map( (park) => 
                (<Marker
                    key={park.properties.title}
                    latitude={park.geometry.coordinates[1]}
                    longitude={park.geometry.coordinates[0]}
                >
                    {/* <h1>You are here</h1> */}
                    {/* <button> */}
                        <img class="location-icon" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png" alt="location" />
                    {/* </button> */}
                </Marker>)
                
            )}
        </ReactMapGl>
        </div>;
}
import React, {useState, useEffect} from 'react';
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import * as ChicagoPark from '../../chicago-parks.json'
import "./Map.styles.scss"

export default function Map(){
    const [viewport, setViewport] = useState({
        latitude: 11.5651,
        longitude: 104.7538,
        width: "100vw",
        height: "100vh",
        zoom: 8
    })

    const [selectedPark, setSelectedPark] = useState(null)

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape"){
                setSelectedPark(null)
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener)
        }
     }, [ ])

    

    return <div>
        <ReactMapGl 
            {...viewport}
            mapboxApiAccessToken={"pk.eyJ1IjoiaHRyYW4yIiwiYSI6ImNrMmdmeWM2dDB1amkzY3AwNWgwNHRteXUifQ.jG0OQ6bMhr-sZYMkdj3H6w"}
            mapStyle="mapbox://styles/htran2/ck2gg912i09dt1cnhtuu1ar2u"
            onViewportChange = {viewport => {
                setViewport(viewport)
            }}
        >
            {ChicagoPark.features.map((park) => 
                (
                <Marker
                    key={park.properties.title}
                    latitude={park.geometry.coordinates[1]}
                    longitude={park.geometry.coordinates[0]}
                >
                        <img onClick = { event => {
                            event.preventDefault()
                            setSelectedPark(park)
                        }
                        } 
                            class="location-icon" 
                            src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png" 
                            alt="location" />
                   
                </Marker>
                )
               
            )}

            {selectedPark ? (
                <Popup
                latitude={selectedPark.geometry.coordinates[1]}
                longitude={selectedPark.geometry.coordinates[0]}
                onClose={() => {
                    setSelectedPark(null)
                }}
                >
                    <div>
                        <h2>{selectedPark.properties.title}</h2>
                        <p>{selectedPark.properties.description}</p>
                    </div>
                </Popup>
            ) : null}

            

            {/* } */}
        </ReactMapGl>
        </div>;
}
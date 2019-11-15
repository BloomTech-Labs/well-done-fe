import React, {useState, useEffect} from 'react';
import ReactMapGl, {Popup} from 'react-map-gl'
import "./Map.styles.scss"
import StatusSpread from '../StatusSpread/statusSpread.component'
import Pin from '../Pin/Pin.component'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'

export default function Map(props){
    console.log('props in Map', props)

    const [selectedPump, setSelectedPump] = useState(null)

    // console.log('viewport Out', viewport)
    console.log('selectedPump', selectedPump)

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

     }, [])   

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
                // history={history}
                pumps={props.pumps} 
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
                    <StatusSpread 
                        sensors={props.sensors} 
                        selectedPump={selectedPump}
                        // history={history}
                    />
                </Popup>
            ) : null}

            

            {/* } */}
        </ReactMapGl>
        </div>;
}

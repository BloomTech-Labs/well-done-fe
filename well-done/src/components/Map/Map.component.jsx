import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


import "./Map.styles.scss";


const Map = () => {
  const MapboxMap = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiYnJ1ZG5hayIsImEiOiJjanpramh2bnMwMGU4M210M3N5amRnMTVkIn0.ShGGESPCjVZo2MugiijwWw"
  });

  return (
    <div class="map">
        <MapboxMap
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: "100vh",
            width: "100vw"
        }}
        >
            <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </MapboxMap>
    </div>
  );
};

export default Map;

import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapContainer(props) {
    if (props.responseData === null || props.responseData === "") {
        return null;
    }

    console.log(props.responseData);

    return (
      <Map
        google={props.google}
        initialCenter={{
          lat: props.responseData.coord.lat,
          lng: props.responseData.coord.lon,
        }}
        zoom={12}
      >
        <Marker name={"Current location"} />
      </Map>
    );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCXGx1RL8a9HUj8_5n9JZhZpyAvgMf_sHo',
})(MapContainer);

import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapContainer(props) {
  // If the marker should be shown
  let showMarker = true;

  if (props.responseData === null || props.responseData === "") {
    showMarker = false; // No response, don't show marker
  }

  if (props.responseData.cod === '400' || props.responseData.cod === '404') {
    showMarker = false; // Invalid response, don't show marker
  }

  // Where the map should be initially centered
  const initialCenter = { lat: -40.111057, lon: 174.477874 }

  // Function to handle map click events
  const onClick = (p, map, coord) => {
    const { latLng } = coord;
    props.onMapClick(latLng.lat(), latLng.lng());   
  }

  // Only render the marker if we have coords
  return (
    <Map
      google={props.google}
      initialCenter={{
        lat: initialCenter.lat,
        lng: initialCenter.lon,
      }}
      zoom={6}
      onClick={onClick}
    >
      {
        showMarker ? <Marker name={"Current location"} position={{ lat: props.responseData.coord.lat, lng: props.responseData.coord.lon }} />
        : <></>
      }
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCXGx1RL8a9HUj8_5n9JZhZpyAvgMf_sHo',
})(MapContainer);

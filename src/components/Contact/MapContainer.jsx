import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{ lat: 40.7128, lng: -74.006 }}
    >
      <Marker position={{ lat: 40.7128, lng: -74.006 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRGqiVVJN9nFfhIJ22J5gflHDg0tXcabY',
})(MapContainer);

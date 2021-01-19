import './App.css';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyle}
        initialCenter={
          {
            lat: 40.2904,
            lng: -76.9923
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY'
})(MapContainer);

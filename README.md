# google-maps-react-tutorial

1. Create a new react app

npx create-react-app google-maps-app

navigate to directory

cd google-maps-app

install google maps library for react

npm install google-maps-react
--force may help

*The project will include files that won't be used for in this tutorial and can be removed
logo.svg, App.css, index.css


2. Add map component

edit App.js file
create a component to load a google map

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


replace 'YOUR_API_KEY' with your Google Maps Javascript API api

The map component takes in some optional props:
- style - takes in a css style object
- zoom - a number value representing height of map camera
- initialCenter - an object with latitude and longitude coordinates


In the index.js import MapContainer from App.js

At this point the basic code for index.js looks like

import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './App';

ReactDOM.render(
    <MapContainer />,
  document.getElementById('root')
);

In the terminal run the app
npm start 

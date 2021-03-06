# How to Add a Google Maps Component into React

### Prerequisites
- Node.Js
- Google Maps Javascript API Key

## 1. Create React app

Create a React app.

`npx create-react-app google-maps-app`

Navigate to the app's directory

`cd google-maps-app`

Install the Google Maps library for react.

`npm install google-maps-react`

>`--force` can be used to force the install to circumvent some errors that might arise

*The files `logo.svg`, `App.css`, `index.css` will not be used and can be removed*

## 2. Add map component

Open the `App.js` file.

Create a component to load a google map.

```
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
```


Optional props used here in the `Map` component are:
- **style** - takes in a css style object
- **zoom** - a number value representing height of map camera
- **initialCenter** - an object with latitude and longitude coordinates

In the `index.js` import `MapContainer` from `App.js`

At this point the basic code for `index.js` looks like

```
import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './App';

ReactDOM.render(
    <MapContainer />,
  document.getElementById('root')
);
```

In the terminal run the app. 

`npm start`

### Screenshot
![Screenshot with API key](https://github.com/Sleighs/google-maps-react-tutorial/blob/master/google-maps-app/public/google%20maps%20api%20tutorial%20pic.png)

Without an API key the map will show in developer mode as shown below.

![Screenshot without key](https://github.com/Sleighs/google-maps-react-tutorial/blob/master/google-maps-app/public/maps%20tutorial%20pic%201.png)

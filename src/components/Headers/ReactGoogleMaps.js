import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
height: '550px', width: '600px'
};

export class ReactGoogleMaps extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -22.661,
         lng: -50.3995
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'CENSORED'
})(ReactGoogleMaps)
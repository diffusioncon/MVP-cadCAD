import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const heatMapData = {
  positions: [
    { lat: 14.206666, lng: -14.5437633 },
    { lat: 14.415418, lng: -14.744481 },
    { lat: 14.449886, lng: -14.303865 },
    { lat: 14.125078, lng: -13.965172 }
    // { lat: 52.4852243, lng: 13.4180641 },
    // { lat: 52.486, lng: 13.4180641 },
    // { lat: 52.486, lng: 13.419 },
    // { lat: 52.49, lng: 13.43 },
    // { lat: 52.491, lng: 13.432 },
    // { lat: 52.48, lng: 13.43 },
    // { lat: 52.493, lng: 13.39 }
  ],
  options: {
    radius: 45,
    opacity: 0.6
  }
};

class HeatMap extends Component {
  static defaultProps = {
    center: {
      lat: 14.3,
      lng: -14.4
    },
    zoom: 10
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "400px",
          width: "100%"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyByaL2JekW-uKMcHKTGJGVB3V7Zd6NfAKg" }}
          defaultCenter={this.props.center}
          heatmapLibrary={true}
          heatmap={heatMapData}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default HeatMap;

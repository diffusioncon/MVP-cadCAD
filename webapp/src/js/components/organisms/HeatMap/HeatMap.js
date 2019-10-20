import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const heatMapData = {
  positions: [
    { lat: 52.4852243, lng: 13.4180641 },
    { lat: 52.486, lng: 13.4180641 },
    { lat: 52.486, lng: 13.419 },
    { lat: 52.49, lng: 13.43 },
    { lat: 52.491, lng: 13.432 },
    { lat: 52.48, lng: 13.43 },
    { lat: 52.493, lng: 13.39 }
  ],
  options: {
    radius: 45,
    opacity: 0.6
  }
};

class HeatMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.4852243,
      lng: 13.4180641
    },
    zoom: 14
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

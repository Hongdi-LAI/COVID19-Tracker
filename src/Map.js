import React from "react";
import "./Map.css";
import { Map as LeadfletMap, TileLayer } from "react-leaflet";

function Map() {
  return (
    <div className="map">
      <LeadfletMap>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeadfletMap>
    </div>
  );
}

export default Map;

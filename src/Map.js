import React from "react";
import "./Map.css";
import { Map as LeadfletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";
function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeadfletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* loop through and draw circles */}
        {showDataOnMap(countries, casesType)}
      </LeadfletMap>
    </div>
  );
}

export default Map;

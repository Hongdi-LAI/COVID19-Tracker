import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";
import React from "react";

/* dictionary for represetation of cases, recovered and deaths */
const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 500,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 600,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 700,
  },
};

//Sorting Function for Data Table
export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  /* Single line sorted function */
  /* sortedData.sort((a,b) => (a.cases > b.cases ? -1: 1)); */
  return sortedData;
};

// Draw circles on the map with interactive tooltip
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        {/* div.div*5 */}
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />

          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0.0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0.0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0.0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

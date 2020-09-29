import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  /* App name */
  useEffect(() => {
    document.title = "Worldwide COVID-19 Tracker";
  }, []);

  /* Get the country infos from disease.sh database */
  useEffect(() => {
    /* async -> send a request, wait for it and do something with it afterwards */
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const CountryCode = event.target.value;
    /* console.log("YOOOOOOOOO>>>>>>", CountryCode); */
    setCountry(CountryCode);
  };
  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        {/* DROPDOWN BOX */}
        <FormControl className="app_dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {/* Loop thru all the country and show dropdown list of that */}
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Title + Select input dropdown field */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;

import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import InfoBox from "./InfoBox";

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
      {/* Header: Title + Select input dropdown field */}
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

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={123} total={200} />
        <InfoBox title="Recovered" cases={123} total={200} />
        <InfoBox title="Deaths" cases={123} total={200} />
      </div>

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem, Card, CardContent } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import "./App.css";

function CovidApp() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide")

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((Response) => Response.json())
        .then((data) => {
          const countries = data.map((Country) => (
            {
              name: Country.country,
              value: Country.countryInfoiso2
            }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode)
  }
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covide-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map((countries) => (
                  <MenuItem value={countries.value}>{countries.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox title="Coronavirus cases" cases={123} total={2000} />

          <InfoBox title="Recovered" cases={1234} total={3000} />

          <InfoBox title="Death" cases={12345} total={4000} />

        </div>

        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          {/* Table */}
          <h3>Worldwide live cases</h3>
          {/* Graph */}
        </CardContent>

      </Card>
    </div>
  );
}

export default CovidApp;
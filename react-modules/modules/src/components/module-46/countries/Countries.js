import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../country/Country";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2> Total countries : {countries.length} </h2>
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </div>
  );
};

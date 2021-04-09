import React from "react";
import CountryList from "./CountryList";

const CountryToDisplay = ({ allCountries, searchValue }) => {
  const filteredCountries = allCountries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchValue.toLowerCase())
  );

  return <CountryList countryList={filteredCountries} />;
};

export default CountryToDisplay;

import React from "react";
import InfoCard from "./InfoCard";

const CountryList = ({ countryList, onItemClick }) => {
  return (
    <div className="countryList">
      {countryList.map((country, index) => (
        <InfoCard country={country} onItemClick={onItemClick} key={index} />
      ))}
    </div>
  );
};

export default CountryList;

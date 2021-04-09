import React from "react";

const InfoCard = ({ country }) => {
  return (
    <div className="infoCard">
      <div className="flagImgContainer">
        <img
          className="flagImg"
          src={country.flag}
          alt={country.name + "'s Flag"}
        />
      </div>
      <div className="countryDetails">
        <h2 className="countryName">{country.name}</h2>
        <ul className="countryDetailsList">
          <li>
            <span className="countryDetailType">Population: </span>
            {country.population}
          </li>
          <li>
            <span className="countryDetailType">Region: </span>
            {country.region}
          </li>
          <li>
            <span className="countryDetailType">Capital: </span>
            {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;

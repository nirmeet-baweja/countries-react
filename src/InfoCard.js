import React from "react";

const InfoCard = (props) => {
  return (
    <div className="infoCard">
      <img
        className="flagImg"
        src={props.country.flag}
        alt={props.country.name + "'s Flag"}
      />
      <p>{props.country.name}</p>
    </div>
  );
};

export default InfoCard;

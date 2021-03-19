import React from "react";
import InfoCard from "./InfoCard";

import AllCountriesData from "./data/allCountriesData.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Countries</header>
      {AllCountriesData.map((country) => (
        <InfoCard country={country} />
      ))}
    </div>
  );
}

export default App;

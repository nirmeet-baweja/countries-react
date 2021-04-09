import React, { useState } from "react";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";

import AllCountriesData from "./data/allCountriesData.json";
import "./App.css";
import Search from "./components/Search";
import CountryToDisplay from "./components/CountryToDisplay";

function App() {
  const [seachValue, setSeachValue] = useState("");

  return (
    <div className="App">
      <Header />
      <Search searchValue={seachValue} setSearchValue={setSeachValue} />
      <CountryToDisplay
        allCountries={AllCountriesData}
        searchValue={seachValue}
      />
    </div>
  );
}

export default App;

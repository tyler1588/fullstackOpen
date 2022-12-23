import { useState, useEffect } from "react";
import axios from "axios";
import CountryDetail from "./components/CountryDetail";

function App() {
  // initialize state
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const endpoint = "https://restcountries.com/v3.1/all";

  // get countries from API
  useEffect(() => {
    axios.get(endpoint).then((res) => {
      const map = res.data.map((country, i) => ({
        data: country,
        isVisible: false,
        id: i,
      }));
      setCountries(map);
    });
  }, []);

  // handle changes to input
  function handleChange(event) {
    setInput(event.target.value);
  }

  // handle country button click

  const handleCountryClick = (event) => {
    setCountries(
      countries.map((country) =>
        country.id === parseInt(event.target.className)
          ? { ...country, isVisible: !country.isVisible }
          : country
      )
    );
  };

  // filter array according to input
  const filtered = countries.filter((country) =>
    country.data.name.common.toLowerCase().includes(input.toLowerCase())
  );

  // create a function to conditionally return filtered countryies
  const countryList = () => {
    // initialize output
    let output = null;

    // check if list is too long
    if (filtered.length > 10) {
      output = <p>Too many matches, specify another filter</p>;
    }
    // return a list of countries if there is between 1 and 10
    else if (filtered.length > 1) {
      output = filtered.map((country, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          {CountryDetail(country)}
          <button
            style={{ height: "20px" }}
            className={country.id}
            onClick={(event) => handleCountryClick(event)}
          >
            {country.isVisible ? "Hide Detail" : "Show Detail"}
          </button>
        </div>
      ));
    }
    // return detailed information if there is only 1 country
    else if (filtered.length === 1) {
      const singleCountry = filtered[0].data;
      output = CountryDetail(singleCountry);
    }
    // no results from search
    else {
      output = <p>No results</p>;
    }
    return output;
  };

  return (
    <div className="App">
      <p>Find Countries</p>
      <input type="text" value={input} onChange={handleChange} />
      {countryList()}
    </div>
  );
}

export default App;

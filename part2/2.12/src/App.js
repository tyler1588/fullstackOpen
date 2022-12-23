import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // initialize state
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const endpoint = "https://restcountries.com/v3.1/all";

  // get countries from API
  useEffect(() => {
    axios.get(endpoint).then((res) => {
      const map = res.data.map((country) => country);
      setCountries(map);
    });
  }, []);

  // handle changes to input
  function handleChange(event) {
    setInput(event.target.value);
  }

  // filter array according to input
  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(input.toLowerCase())
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
        <p key={i}>{country.name.common}</p>
      ));
    }
    // return detailed information if there is only 1 country
    else if (filtered.length === 1) {
      const singleCountry = filtered[0];
      const languages = Object.values(singleCountry.languages);
      output = (
        <div>
          <h1>{singleCountry.name.common}</h1>
          <p>Capital: {singleCountry.capital[0]}</p>
          <p>Area: {singleCountry.area}</p>
          <h2>Languages:</h2>
          <ul>
            {languages.map((language, i) => {
              return <li key={i}>{language}</li>;
            })}
          </ul>
          <img src={singleCountry.flags.svg} alt="flag" height="100px"></img>
        </div>
      );
    }
    // no results from search
    else {
      output = <p>No results</p>;
    }
    return output;
  };

  return (
    <div className="App">
      <p>find countries</p>
      <input type="text" value={input} onChange={handleChange} />
      {countryList()}
    </div>
  );
}

export default App;

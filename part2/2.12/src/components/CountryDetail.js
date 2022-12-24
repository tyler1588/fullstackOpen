const CountryDetail = (country, onlyCountry) => {
  if (country.isVisible === false && onlyCountry === false) {
    return <p>{country.data.name.common}</p>;
  } else {
    const languages = Object.values(country.data.languages);
    return (
      <div>
        <h1>{country.data.name.common}</h1>
        <p>Capital: {country.data.capital[0]}</p>
        <p>Area: {country.data.area}</p>
        <h2>Languages:</h2>
        <ul>
          {languages.map((language, i) => {
            return <li key={i}>{language}</li>;
          })}
        </ul>
        <img src={country.data.flags.svg} alt="flag" height="100px"></img>
      </div>
    );
  }
};

export default CountryDetail;

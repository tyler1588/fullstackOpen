const CountryDetail = (country) => {
  const languages = Object.values(country.languages);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h2>Languages:</h2>
      <ul>
        {languages.map((language, i) => {
          return <li key={i}>{language}</li>;
        })}
      </ul>
      <img src={country.flags.svg} alt="flag" height="100px"></img>
    </div>
  );
};

export default CountryDetail;

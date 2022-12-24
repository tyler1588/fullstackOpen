const CountryWeatherDetail = (country, weather) => {
  const languages = Object.values(country.data.languages);
  const imgUrl =
    "http://openweathermap.org/img/wn/" +
    weather.data.weather[0].icon +
    "@2x.png";
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
      <h2>Weather in {country.data.capital}</h2>
      <p>Temperature {weather.data.main.temp} Celcius</p>
      <img src={imgUrl} alt="weatherIcon"></img>
      <p>Wind {weather.data.wind.speed} m/s</p>
    </div>
  );
};

export default CountryWeatherDetail;

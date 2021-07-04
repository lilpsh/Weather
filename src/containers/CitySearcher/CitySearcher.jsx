import React, { useState } from "react";

import "./CitySearcher.scss";

import { getCitiesByQuery } from "../../api/api";

const CitySearcher = (props) => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);

  console.log(cities);

  const handleGetWeather = (lat, lon) => {
    props.getWeatherByCoords(lat, lon);
    setCities([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getCitiesByQuery(query)
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch(console.error);
  };

  return (
    <div className='city-weather'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='city-weather__input'
        />

        <button className='city-weather__search'>Search</button>
      </form>

      {cities.length ? (
        <ul className='city-weather__cities-list'>
          {cities.map((city, i) => (
            <li
              onClick={() => handleGetWeather(+city.lat, +city.lon)}
              className='city-weather__cities-list-item'
              key={i}
            >
              {city.display_name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearcher;

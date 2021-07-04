import React from "react";
import "../components/SavedCities.scss";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import mapsKey from "../secret/mapsKey";

function SavedCities({ data, currentWeatherData, ...props }) {
  const handleOnClick = city => {
    props.getWeatherByCoords(city.lat, city.lon);
  };

  return (
    <>
      <ul className="saved-cities">
        {data.map((city, i) => {
          return (
            <li
              onClick={() => handleOnClick(city)}
              className="saved-cities__li"
              key={i}
            >
              {city.name}
            </li>
          );
        })}
      </ul>

      <Map
        google={props.google}
        zoom={14}
        initialCenter={{
          lat: currentWeatherData.coord.lat,
          lon: currentWeatherData.coord.lon
        }}
        center={{
          lat: currentWeatherData.coord.lat,
          lon: currentWeatherData.coord.lon
        }}
      >
        <Marker
          name={"Cuurrent location"}
          position={{
            lat: currentWeatherData.coord.lat,
            lon: currentWeatherData.coord.lon
          }}
        />
      </Map>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: mapsKey
})(SavedCities);

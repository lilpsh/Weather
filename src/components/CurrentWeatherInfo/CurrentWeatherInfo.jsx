import React from "react";

import "./CurrentWeatherInfo.scss";

const CurrentWeatherInfo = ({ currentWeatherData: data }) => {
  console.log(data);

  if (!data) {
    return null;
  }

  return (
    <div className="city__wrapper">
      <span className="city__wrapper-name">
        {data.name === "Trukhanov Island" ? "Kyiv" : data.name}{" "}
        {data.sys.country}
      </span>
      <span className="city__wrapper-temperature">
        {(data.main.temp - 273.15).toFixed(2)}&deg;C
      </span>
      <span className="city__wrapper-weather">{data.weather[0].main}</span>
      <span className="city__wrapper-wind">Wind: {data.wind.speed}m/s</span>
      <span
        className="city__wrapper-direction"
        style={{ transform: `rotateZ(${data.wind.deg}deg)` }}
      >
        &#8593;
      </span>
    </div>
  );
};

export default CurrentWeatherInfo;

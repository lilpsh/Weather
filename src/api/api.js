import key from "../secret/weatherKey";
import geoKey from "../secret/geoKey";

const getCitiesByQuery = (query) => {
  return fetch(`https://eu1.locationiq.com/v1/search.php?key=${geoKey}&city=${query}&format=json`);
};

const getDataByCoords = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
  );
};

export { getDataByCoords, getCitiesByQuery };

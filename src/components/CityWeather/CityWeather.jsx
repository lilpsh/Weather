// import React, { useState } from "react";

// import { getCitiesByQuery } from "../../api/app";

// export default function CityWeather() {
//   const [query, setQuery] = useState("");
//   const [cities, setCities] = useState([]);

//   const handleSubmit = e => {
//     e.preventDefault();

//     getCitiesByQuery(query)
//       .then(res => res.json())
//       .then(data => setCities(data))
//       .catch(console.error);
//   };

//   return (
//     <div className="city-weather">
//       <form onSubmit={handleSubmit}></form>
//       <input
//         type="text"
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         className="city-weather__input"
//       />

//       <button className="city-weather__search">Search</button>

//       <ul className="city-weather__cities-list">
//         <li className="city-weather__cities-list-item" key={i}>
//           {city}
//         </li>
//       </ul>
//     </div>
//   );
// }

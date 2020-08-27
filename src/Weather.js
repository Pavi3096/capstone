import React, { useEffect, useState } from "react";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "f3506c5a1af1f81eadfd93e183f40803";
let city ="New York, USA";

function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(api).then(response => response.json()).then(data => {
      setWeather(data);
    })
  }, []);

  return (
    <h2> It is currently {weather && weather.main.temp}° F in {city}.</h2>
  );
}

export default Weather;

import React, { useState } from "react";
import axios from "axios";
import "../styles/Weather.css";
export default function Weather() {
  const [city, setCity] = useState("");
  const [processed, setProcessed] = useState(false);
  const [info, setInfo] = useState({});
  const apiKey = process.env.REACT_APP_API_KEY;
  function displayWeatherInfo(response) {
    setProcessed(true);
    setInfo({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherInfo);
  }

  function showData(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search the weather"
          onChange={showData}
          className="weatherInput"
        />
        <input type="submit" className="submitButton" value="submit" />
      </form>
    </div>
  );

  if (processed) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li> City: {info.city}</li>
          <li>Temperature: {Math.round(info.temperature)}°C</li>
          <li>Description: {info.description}</li>
          <li>Humidity: {info.humidity}%</li>
          <li>Wind: {info.wind}km/h</li>
          <li>
            <img src={info.icon} alt={info.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

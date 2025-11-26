import React from "react";
import './WeatherCard.css';

const WeatherCard = ({ data }) => {

  const fecha = new Date(data.dt * 1000).toLocaleString("es-ES", {
    dateStyle: "full",
    timeStyle: "short"
  });

  return (
    <li className="resultList">
      <div className="nameIcon">
        <h3>{fecha}</h3>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
        />
      </div>
      <div className="dataWeather">
        <p><b>Temperatura:</b> {data.main.temp}°C</p>
        <p><b>Clima:</b> {data.weather[0].main}</p>
        <p><b>Descripción:</b> {data.weather[0].description}</p>
        <p><b>Velocidad del viendo:</b> {data.wind.speed}</p>
      </div>
    </li>
  );
};

export default WeatherCard;


import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard/WeatherCard";
import { v4 as uuidv4 } from "uuid";

import "./WeatherList.css";

const WeatherList = () => {
  const apiKey = import.meta.env.VITE_MY_API_KEY;

  const [value, setValue] = useState("Madrid"); // Para guardar el dato a buscar
  const [posts, setPosts] = useState([]); // Para guardar los posts
  const [city, setCity] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${apiKey}`
        );
        const json = res.data;

        setPosts(res.data.list);
        setCity(res.data.city.name);
      } catch (e) {
        setPosts([]); // No pintes nada
      }
    }
    fetchData();
  }, [value]); // componentDidUpdate. Recibir actualizaciones

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.city.value);
    setValue(e.target.city.value); // Modificando el estado de Value
  };

  const renderCards = () =>
    posts.map((post) => <WeatherCard data={post} key={uuidv4()} />);

  return (
    <section>
      <article className="cityForm">
        <h1>Busca tu ciudad</h1>
        <form className="citySeach" onSubmit={handleSubmit}>
          <input
            name="city"
            placeholder="Inserta aquí el nombre de una ciudad"
          />
          <button className="seachBoton">Buscar</button>
        </form>
      </article>
      <h2>Clima en {city}</h2>

      {posts.length !== 0 ? (
        <ul className="weatherCity">{renderCards()}</ul>
      ) : (
        ""
      )}
    </section>
  );
};
export default WeatherList;

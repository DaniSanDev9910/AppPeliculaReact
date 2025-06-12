import React from "react";
import CarruselPeliculas from "../components/CarruselPeliculas/CarruselPeliculas";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Inicio</h1>
      <p>Bienvenido a nuestra aplicación de gestión de películas.</p>
      <br />
      <CarruselPeliculas />
    </div>
  );
};

export default Home;

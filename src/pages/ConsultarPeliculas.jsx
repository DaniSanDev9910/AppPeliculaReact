import React from "react";
import { obtenerPeliculas } from "../services/peliculaService";
import TarjetaPelicula from "../components/TarjetaPelicula/TarjetaPelicula";
import { useState, useEffect } from "react";

const ConsultarPeliculas = () => {

    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    obtenerPeliculas()
    .then(setDatos)
    .catch(setError)
    .finally(() => setCargando(false));
    }, []);

    if (cargando) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mt-5">
      <h1>Consultar Películas</h1>
      {/* Aquí puedes agregar la lógica para consultar las películas */}
      <br></br>
      <ul>
        {datos.map(item => (
          <TarjetaPelicula 
            key={item.id}
            urlImagen={item.imagen}
            titulo={item.nombre}
            descripcion={item.sinopsis}
            genero={item.idGenero}
          />
        ))}
      </ul>
    </div>
  );
};

export default ConsultarPeliculas;

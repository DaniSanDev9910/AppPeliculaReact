import React from "react";
import GeneroDropdown from "../components/GeneroDropDown/GeneroDropdown";
import { crearPelicula } from "../services/peliculaService";

const CrearPelicula = () => {

  const [nombre, setNombre] = React.useState("");
  const [sinopsis, setSinopsis] = React.useState("");
  const [imagen, setImagen] = React.useState("");
  const [idGenero, setIdGenero] = React.useState("");
  const [director, setDirector] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevaPelicula = {
      nombre,
      sinopsis,
      imagen,
      idGenero,
      director
    };
    const respuesta = await crearPelicula(nuevaPelicula);
    console.log(respuesta);
  };

  return (
    <div className="container mt-5">
      <h1>Crear Película</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            className="form-control"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sinopsis" className="form-label">Sinopsis</label>
          <textarea
            className="form-control"
            id="sinopsis"
            value={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <GeneroDropdown value={idGenero} onChange={(e) => setIdGenero(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Director</label>
          <input
            className="form-control"
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input
            className="form-control"
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear Película</button>
      </form>
    </div>
  );
};

export default CrearPelicula;
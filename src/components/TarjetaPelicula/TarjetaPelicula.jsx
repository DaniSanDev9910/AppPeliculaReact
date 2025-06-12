import React from "react";

function TarjetaPelicula({ urlImagen, titulo, descripcion, genero }) {
  return (
    <div className="card" style={{ width: "13rem", height: "22rem" }}>
      <img src={urlImagen} className="card-img-top" alt={titulo} style={{width: "55%"}} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text"><small className="text-muted">Género: {genero}</small></p>
      </div>
    </div>
  );
}

export default TarjetaPelicula;
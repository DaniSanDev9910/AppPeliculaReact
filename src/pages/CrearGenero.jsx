import React from "react";

const CrearGenero = () => {
  return (
    <div className="container mt-5">
      <h1>Crear Género</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" />
        </div>
        <button type="submit" className="btn btn-primary">Crear Género</button>
      </form>
    </div>
  );
};

export default CrearGenero;

import React, { useEffect, useState } from 'react';
import { obtenerGeneros } from '../../services/generoService';
import { Form } from 'react-bootstrap';

const GeneroDropdown = ({ onChange, value }) => {
  const [generos, setGeneros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerGeneros()
      .then(setGeneros)
      .catch(setError)
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando géneros...</p>;
  if (error) return <p>Error al cargar géneros: {error.message}</p>;

  return (
    <Form.Group controlId="generoSelect">
      <Form.Label>Género</Form.Label>
      <Form.Select value={value} onChange={onChange}>
        <option value="">Seleccione un género</option>
        {generos.map(genero => (
          <option key={genero.id} value={genero.id}>
            {genero.nombre}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default GeneroDropdown;
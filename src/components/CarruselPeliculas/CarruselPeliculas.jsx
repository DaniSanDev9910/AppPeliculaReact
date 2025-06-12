import React from "react";
import { Carousel } from "react-bootstrap";
import { obtenerPeliculas } from "../../services/peliculaService";

const CarruselPeliculas = () => {
  const [peliculas, setPeliculas] = React.useState([]);
  const [cargando, setCargando] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    obtenerPeliculas()
      .then(setPeliculas)
      .catch(setError)
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando películas...</p>;
  if (error) return <p>Error al cargar películas: {error.message}</p>;

  return (
    <Carousel>
      {peliculas.map((pelicula) => (
        <Carousel.Item key={pelicula.id}>
          <img
            className="d-block w-100"
            src={pelicula.imagen}
            alt={pelicula.nombre}
          />
          <Carousel.Caption>
            <h3>{pelicula.nombre}</h3>
            <p>{pelicula.sinopsis}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default CarruselPeliculas;
import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="pelicula-card-pedidos pelicula-card">
      <a
        href={movie.trailer}
        target="_blank"
        rel="noreferrer"
        className="pagPedidoPeli-Reserv"
      >
        <h3 className="pelicula-titulo">{movie.nombre}</h3>
        <div className="portada-wrapper">
          <img
            src={movie.portada}
            alt={movie.nombre}
            className="pelicula-portada"
          ></img>
        </div>
      </a>
      <p>
        <strong>Duración: </strong>
        {movie.duracion} min.
      </p>
      <p className="pelicula-categoria">
        <strong>Genero: </strong>
        {movie.categoria}
      </p>
      <p>
        <strong>Año de Estreno: </strong>
        {movie.anoEstreno}
      </p>
      <a href={movie.trailer} target="_blank" rel="noreferrer">
        <input type="button" value="Ver Pelicula" />
      </a>
    </div>
  );
};

export default Movie;

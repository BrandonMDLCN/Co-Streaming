import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="pelicula-card">
      <a href={movie.trailer} target="_blank" rel="noreferrer" className="pagPedidoPeli-Reserv">
        <h3 className="pelicula-titulo">{movie.nombre}</h3>
        <img
          src={movie.portada}
          alt={movie.nombre}
          className="pelicula-portada"
        ></img>
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
        <strong>Puntuación: </strong>
        {movie.puntuation}
      </p>
      <a href={movie.trailer} target="_blank" rel="noreferrer">
        <input type="button" value="Ver Pelicula" />
      </a>
    </div>
  );
};

export default Movie;

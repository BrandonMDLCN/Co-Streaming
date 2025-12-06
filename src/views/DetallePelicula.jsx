import React from 'react'
import { useParams } from 'react-router-dom'
import PeliculaDetails from '../components/PeliculaDetails';

const DetallePelicula = ({peliculas, isLoading, error, comprarPelicula, reservarPelicula}) => {
    const {id} = useParams();
    const pelicula = peliculas.find(peli => peli.id.toString() === id);
    if(!pelicula){
        return <div className="movie-details">Pelicula no encontrada.</div>
    }
  return (
    <div>
      <h1>Detalle  de Pelicula</h1>
        <div className="peliculas-grid">
            <PeliculaDetails key={pelicula.id} pelicula={pelicula} comprarPelicula={comprarPelicula} reservarPelicula={reservarPelicula}/>
        </div>
    </div>
  )
}

export default DetallePelicula
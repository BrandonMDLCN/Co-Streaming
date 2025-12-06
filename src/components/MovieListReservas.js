import React from "react";
import Movie from "./Movie";

const MovieListReservas = ({reservas}) => {
    return(
        <main className="landing">
            {
                reservas.map((movie) => (
                    <Movie key={movie.id} movie={movie}/>
                ))
            }
        </main>
    );
};

export default MovieListReservas;
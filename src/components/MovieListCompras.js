import React from "react";
import Movie from "./Movie";

const MovieListCompras = ({compras}) => {
    return(
        <main className="landing">
            {
                compras.map((movie) => (
                    <Movie key={movie.id} movie={movie}/>
                ))
            }
        </main>
    );
};

export default MovieListCompras;
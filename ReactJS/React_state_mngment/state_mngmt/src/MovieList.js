import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

function MovieList() {
    const [movies, setmovies] = useContext(MovieContext);

    return (
        movies.map((movie) => (
            <Movie name={movie.name} price={movie.price} />
        ))
    );
};
export default MovieList;

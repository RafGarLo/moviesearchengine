
import { useState } from 'react';

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imbdID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  

  return { movies: mappedMovies }
}
import withoutResults from "../mocks/no-results.json";

const API_KEY = "4287ad07";
export const fetchMovies = async ({ search }) => {
    if (search === '') return null;

    try {
       const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
       const json = await response.json();
    
    const movies = json.Search;

  return  movies?.map((movie) => ({
    id: movie.imbdID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }))
 } catch (e) {
    throw new Error('Error searching movies')
 }
};
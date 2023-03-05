import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";
import { useSearch } from "./hooks/useSearch";
import { useCallback } from "react";

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const debouncedGetMovies =  useCallback(
    debounce(search => {
    console.log('search', search)
    getMovies({ search })
  }, 500)
  , [getMovies]) 

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            value={search}
            onChange={handleChange}
            placeholder="Avengers, Star Wars, The Matrix..."
          />

          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;

import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";

import { useSearch } from "./hooks/useSearch";



function App() {
  const { search, updateSearch, error } = useSearch();
  
  const { movies, getMovies, loading } = useMovies({ search });
  
  
  

  console.log("render");

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies()
  };

  const handleChange = (event) => {
    
    updateSearch(event.target.value);
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

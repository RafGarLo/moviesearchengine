import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";

import { useSearch } from "./hooks/useSearch";
import { useState } from 'react';



function App() {
  const [sort, setSort] = useState(false);
  
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search })
  };

  const handleSort = () => {
    setSort(!sort)
  }

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
          <input type='checkbox' onChange={handleSort} checked={sort} ></input>
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;

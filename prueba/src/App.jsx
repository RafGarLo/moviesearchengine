import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";
import { useRef } from "react";

function App() {
  const { movies: mappedMovies } = useMovies();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputEl = inputRef.current;
    const value = inputEl.value;
    console.log(value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;

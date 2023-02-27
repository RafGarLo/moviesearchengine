import withoutResults from "../mocks/no-results.json";

const API_KEY = "4287ad07";
export const getMovies = async ({ search }) => {
  if (search) {
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      .then((res) => res.json())
      .then((json) => {
        setResponseMovies(json);
      });
  } else {
    setResponseMovies(withoutResults);
  }
};

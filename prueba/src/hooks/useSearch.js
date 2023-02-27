import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if(isFirstInput.current) {
        isFirstInput.current === search === ''
        return
    }
    if (search === "") {
      setError("Cannot find anything with an empty field");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("Cannot look for movies with numbers. Sorry.");
      return;
    }
    if (search.length < 3) {
      setError("You need to input 4 characters at least to perform a search.");
      return;
    }
    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

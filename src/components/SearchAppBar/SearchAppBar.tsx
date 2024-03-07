import "./SearchAppBar.css";
import SearchBar from "../../blocks/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useMovies } from "../../ProviderContext";
import { Link } from "react-router-dom";

const KEY = "4c2d88bd";

const SearchAppBar = () => {
  const [query, setQuery] = useState("");
  const { dispatch } = useMovies();
  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok) throw new Error("Error while fetching movie");

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        dispatch({ type: "setMovies", payload: data.Search });
      } catch (err) {
        console.log(err);
      }
    }

    if (query.length < 3) {
      return;
    }
    fetchMovies();
  }, [query]);
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <Link to="/" className="logo-link">
            MD
          </Link>
        </div>
        <SearchBar setQuery={setQuery} />
        <div>
          <button className="btn btn-login">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default SearchAppBar;

import { useEffect, useRef } from "react";
import "./SearchBar.css";
const SearchBar = ({ setQuery }) => {
  const inputBar = useRef();
  useEffect(() => {
    inputBar.current.focus();
  }, []);
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Search..."
      onChange={(e) => setQuery(e.target.value)}
      ref={inputBar}
    />
  );
};

export default SearchBar;

import Card from "../../blocks/Card/Card";
import { useMovies } from "../../ProviderContext";

const styleSearch = {
  maxWidth: "130rem",
  width: "100%",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: "1rem",
};

const SearchList = () => {
  const { state } = useMovies();
  return (
    <div style={styleSearch}>
      {state?.movies.map((movie) => (
        <Card key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default SearchList;

import "./Card.css";
import createWishlist from "../../services/createWishlist";
import { Link } from "react-router-dom";
import { MovieProp } from "../../App.types";

interface CardProp {
  movie: MovieProp;
}

const Card = ({ movie }: CardProp) => {
  return (
    <Link to={`title/${movie.imdbID}`} className="">
      <div className="card-container">
        <div className="img-container">
          <img
            src={movie.Poster}
            alt={`Movie Poster of ${movie.Title}`}
            className="card-img"
          />
        </div>
        <div className="info">
          <p className="card-title">{movie.Title}</p>
          <p className="card-year">🗓️{movie.Year}</p>
        </div>
        <div>
          <button
            className="btn-wishlist"
            onClick={() => createWishlist(movie)}
          >
            WatchList+
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
// {Title: 'Batman Begins', Year: '2005', imdbID: 'tt0372784', Type: 'movie', Poster: '
// https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2…zQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
// }

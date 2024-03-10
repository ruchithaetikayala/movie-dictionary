import "./Card.css";
import createWishlist from "../../services/createWishlist";
import { Link } from "react-router-dom";
import { MovieProp } from "../../App.types";
import { SetStateAction, useState } from "react";
import Loader from "../Loader/Loader";

interface CardProp {
  movie: MovieProp;
}

const handleClick=(movie: MovieProp,setShowLoader: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; },setButtonText: { (value: SetStateAction<string>): void; (arg0: string): void; },setButtonDisabled: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; })=>{
  setShowLoader(true)
  createWishlist(movie)
  setButtonText('Remove Wishlist')
  setButtonDisabled(true)
  setTimeout(() => setShowLoader(false), 2000)
}

const Card = ({ movie }: CardProp) => {
  const [showLoader, setShowLoader] = useState(false);
  const [buttonText, setButtonText] = useState("Wishlist+");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  return (
    <Link to={`title/${movie.imdbID}`} className="">
      <div className={`card-${showLoader ? "loader" : "container"}`}>
        <div className="loader">{showLoader && <Loader />}</div>
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
            className={isButtonDisabled ? "btn-disable" : "btn-wishlist"}
            onClick={(e) =>{
              e.preventDefault()
              handleClick(
                movie,
                setShowLoader,
                setButtonText,
                setButtonDisabled
              )
            }
              
            }
            disabled={isButtonDisabled}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;

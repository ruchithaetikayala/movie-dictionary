import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieOverView.css";
const KEY = "4c2d88bd";

const MovieOverView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType>();
  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${id}&plot=full`
        );
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        setMovie(data);
        console.log("movie", data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMovie();
  }, []);
  return (
    <div className="movie-container">
      <div className="grid-container">
        <div className="movie-img">
          <img src={movie?.Poster} alt={`Poster of movie ${movie?.Title}`} />
        </div>
        <div className="movie-title">
          <h1>{movie?.Title}</h1>
          <h5>{`IMDB Rating : ${movie?.imdbRating}/10`}</h5>
          <hr />
          <h6>{`Released 📆 :  ${movie?.Released}`}</h6>
          <hr />

          <h6>{`Genre 🍿: ${movie?.Genre}`}</h6>
          <hr />

          <h6>{`Runtime ⏳: ${movie?.Runtime}`}</h6>
          <hr />

          <h6>{`Cast 🕴🏻: ${movie?.Actors}`}</h6>
          <hr />

          <h6>{`Language : ${movie?.Language}`}</h6>
          <hr />

          <h6>{`Country: ${movie?.Country}`}</h6>
          <hr />
          <h6>{`Directed by ${movie?.Director}`}</h6>
          <hr />

          <h6>{`Written by ${movie?.Writer}`}</h6>
          <hr />
        </div>

        <div className="movie-plot">
          <h4>PLOT</h4>
          <p>{`${movie?.Plot}`}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieOverView;

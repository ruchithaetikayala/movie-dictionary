import axios from "axios";

const createWishlist = (movie) => {
  axios
    .post("https://moviedictionarynodeapis.onrender.com/wishlist", {
      movieId: movie.imdbID,
      movieTitle: movie.Title,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export default createWishlist;

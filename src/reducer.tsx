import { MovieProp } from "./App.types";
export interface InitialStateProps {
  state: string;
  movies: MovieProp[];
  movie: MovieProp;
  error: string;
}
export type Action =
  | { type: "ready" }
  | { type: "loading" }
  | { type: "error" }
  | { type: "done" }
  | { type: "setMovies"; payload: MovieProp[] };

function reducer(state: {}, action: Action) {
  switch (action.type) {
    case "ready":
      return { ...state, status: "ready" };
    case "loading":
      return { ...state, status: "loading" };
    case "error":
      return { ...state, status: "error" };
    case "done":
      return { ...state, status: "done" };
    case "setMovies": {
      return { ...state, movies: action.payload };
    }
  }
}
export default reducer;

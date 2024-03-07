import {
  createContext,
  useReducer,
  ReactElement,
  useContext,
  Dispatch,
  useMemo,
} from "react";

import reducer, { InitialStateProps, Action } from "./reducer";

interface IContextProps {
  state: InitialStateProps;
  dispatch: Dispatch<Action>;
}

const MovieContext = createContext({} as IContextProps);

function MovieProvider({ children }: { children: ReactElement }) {
  const initialState = useMemo(() => {
    return {
      // 'ready' , loading , error , done
      status: "ready",
      movies: [],
      movie: {},
      error: "",
    };
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MovieContext);

  if (context === undefined)
    throw new Error("MovieContext was used outside of the MovieProvider");

  return context;
}

export { MovieProvider, useMovies };

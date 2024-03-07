import SearchAppBar from "./components/SearchAppBar/SearchAppBar";
import AppLayout from "./components/AppLayout/AppLayout";
import SearchList from "./components/SearchResult/SearchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieOverView from "./components/MovieOverView/MovieOverView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AppLayout>
                <SearchList />
              </AppLayout>
            </>
          }
        />
        <Route
          path="title/:id"
          element={
            <>
              <AppLayout>
                <MovieOverView />
              </AppLayout>
            </>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

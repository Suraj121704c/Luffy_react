import { Route, Routes } from "react-router-dom";
import Homepage from "../screens/Homepage";
import Movies from "../screens/Movies/Movies";
import MovieDetails from "../screens/MovieDetails/movieDetails";
import PageNotFound from "../screens/PageNotFound/pageNotFound";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="movies/:id" element={<MovieDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

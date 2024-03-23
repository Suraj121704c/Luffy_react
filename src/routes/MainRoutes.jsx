import { Route, Routes } from "react-router-dom";
import Homepage from "../screens/Homepage";
import Movies from "../screens/Movies/Movies";
import MovieDetails from "../screens/MovieDetails/movieDetails";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="movies/:id" element={<MovieDetails />} />
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";
import Homepage from "../../screens/Homepage";
import Movies from "../../screens/Movies/Movies";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};

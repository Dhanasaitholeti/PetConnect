import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import FavouriteScreen from "./pages/FavouriteScreen";
import NotFoundScreen from "./pages/NotFoundScreen";

const RouteManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/favourite" element={<FavouriteScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default RouteManager;

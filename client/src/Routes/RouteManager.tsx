import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import FavouriteScreen from "../pages/FavouriteScreen";
import NotFoundScreen from "../pages/NotFoundScreen";

const RouteManager = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/favourite" element={<FavouriteScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};

export default RouteManager;

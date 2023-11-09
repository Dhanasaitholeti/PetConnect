import { Routes, Route } from "react-router-dom";
import HomeScreen from "../../pages/HomeScreen";
import FavouriteScreen from "../../pages/FavouriteScreen";
import NotFoundScreen from "../../pages/NotFoundScreen";
// import RouteGaurd from "./Routegaurd";

const RouteManager = () => {
  return (
    <>
      <Routes>
        {/* <Route element={<RouteGaurd />}> */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/favourite" element={<FavouriteScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default RouteManager;

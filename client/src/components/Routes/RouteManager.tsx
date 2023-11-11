import { Routes, Route } from "react-router-dom";
import HomeScreen from "../../pages/HomeScreen";
import FavouriteScreen from "../../pages/FavouriteScreen";
import NotFoundScreen from "../../pages/NotFoundScreen";
import PetDetails from "../pet/PetDetails";
import LoginScreen from "../../pages/LoginScreen";
import SignupScreen from "../../pages/SignupScreen";
import AddPet from "../../pages/AddPet";
// import RouteGaurd from "./Routegaurd";

const RouteManager = () => {
  return (
    <>
      <Routes>
        {/* <Route element={<RouteGaurd />}> */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/user/login" element={<LoginScreen />} />
        <Route path="/user/signup" element={<SignupScreen />} />
        <Route path="/favourite" element={<FavouriteScreen />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/pet/add" element={<AddPet />} />
        <Route path="*" element={<NotFoundScreen />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default RouteManager;

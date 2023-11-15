import { Routes, Route } from "react-router-dom";
import HomeScreen from "../../pages/HomeScreen";
import FavouriteScreen from "../../pages/FavouriteScreen";
import NotFoundScreen from "../../pages/NotFoundScreen";
import PetDetails from "../../pages/PetProfile";
import LoginScreen from "../../pages/LoginScreen";
import SignupScreen from "../../pages/SignupScreen";
import AddPet from "../../pages/AddPet";
import ChatScreen from "../../pages/ChatScreen";
import RouteGaurd from "./Routegaurd";

const RouteManager = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/user/login" element={<LoginScreen />} />
        <Route path="/user/signup" element={<SignupScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
        <Route element={<RouteGaurd />}>
          <Route path="/favourite" element={<FavouriteScreen />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/pet/add" element={<AddPet />} />
          <Route path="/chats" element={<ChatScreen />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteManager;

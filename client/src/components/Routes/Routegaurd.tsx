import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../services/redux/store";
import axios from "axios";
import { urls } from "../../configs/apis";
import Cookies from "js-cookie";
import { updateuser } from "../../services/redux/slices/user.slice";
import { useEffect } from "react";
import useCustomToast from "../../hooks/useCustomToast";

const RouteGaurd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showToast = useCustomToast();
  const { user, error } = useSelector((state: RootState) => state.UserReducer);

  useEffect(() => {
    if (!Cookies.get("authToken")) {
      navigate("/user/login");
      showToast({
        status: "info",
        title: "You are not Authorized",
        description: "please try to Login/Signup",
      });
    }
  }, []);

  const getuser = async () => {
    const response = await axios.get(urls.getuser, {
      headers: {
        Authorization: `Bearer ${Cookies.get("authToken")}`,
      },
    });
    dispatch(updateuser({ user: response.data.user, error: false }));
  };

  if (Cookies.get("authToken") && (!user || error)) {
    getuser();
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default RouteGaurd;

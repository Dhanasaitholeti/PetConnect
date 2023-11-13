import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { RootState } from "../../services/redux/store";
import axios from "axios";
import { urls } from "../../configs/apis";
import Cookies from "js-cookie";
import { updateuser } from "../../services/redux/slices/user.slice";

const RouteGaurd = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state: RootState) => state.UserReducer);

  const getuser = async () => {
    const response = await axios.get(urls.getuser, {
      headers: {
        Authorization: `Bearer ${Cookies.get("authToken")}`,
      },
    });
    dispatch(updateuser({ user: response.data.user, error: false }));
  };

  if (!user || error) {
    getuser();
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default RouteGaurd;

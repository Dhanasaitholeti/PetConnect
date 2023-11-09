import { Outlet, useLocation } from "react-router-dom";

const RouteGaurd = () => {
  const location = useLocation();
  return <>{location.pathname === "/" && <Outlet />}</>;
};

export default RouteGaurd;

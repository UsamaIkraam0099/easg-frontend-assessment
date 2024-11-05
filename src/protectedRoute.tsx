import { JSX } from "react";
import { Navigate } from "react-router-dom";

// others
import { useAuthState } from "./hooks";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // hooks initialization
  const { getAccessToken }: any = useAuthState({ type: "" });
  const accessToken = getAccessToken();

  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

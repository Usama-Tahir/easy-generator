import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useProtectedRoute } from "../../hooks/auth/useProtectedRoute";
import { routePaths } from "../../constants";

interface ProtectedRouteProps {
  redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = routePaths.LOGIN,
}) => {
  const { isAuthenticated, loading } = useProtectedRoute(redirectPath);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

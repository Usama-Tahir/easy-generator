import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useProtectedRoute } from "../../hooks/auth/useProtectedRoute";

interface ProtectedRouteProps {
  redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/auth/login",
}) => {
  const { isAuthenticated, loading } = useProtectedRoute(redirectPath);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

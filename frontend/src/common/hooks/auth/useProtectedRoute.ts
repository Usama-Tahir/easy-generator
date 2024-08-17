import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "./useCurrentUser";

export const useProtectedRoute = (redirectPath: string = "/login") => {
  const navigate = useNavigate();
  const { currentUser, loading, error } = useCurrentUser();

  useEffect(() => {
    if (loading === false) {
      if (error || currentUser == undefined) {
        navigate(redirectPath);
      }
    }
  }, [loading, error, navigate, redirectPath, currentUser]);

  return { isAuthenticated: currentUser != undefined, loading };
};

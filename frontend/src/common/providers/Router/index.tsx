import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../../../auth/pages/SignIn";
import Signup from "../../../auth/pages/Signup";
import Dashboard from "../../../Dashboard/pages/Landing";
import { routePaths } from "../../constants";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.LOGIN} element={<Login />} />
        <Route path={routePaths.SIGN_UP} element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path={routePaths.HOME} element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

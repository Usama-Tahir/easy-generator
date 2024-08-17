import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../../../auth/pages/SignIn";
import Signup from "../../../auth/pages/Signup";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/sign-up" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

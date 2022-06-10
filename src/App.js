import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import Login from "./pages/Login";

function App() {
  const auth = useSelector((state) => state.auth.isAuth);
  console.log('myAuth', auth);
  return (
    <Routes>
      {!auth && (
        <Route path="/auth" element={<Login />} />
      )}
      {auth && (
        <Route path="/dashboard" element={<Dashboard />} />
      )}
      <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/auth"} />} />
    </Routes>
  );
}

export default App;

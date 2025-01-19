import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const App = () => {
  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <Router>
      <Routes>
        {/* Redirect to home page if logged in, else show login */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage />} />
        {/* Redirect to login page if not logged in */}
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
        {/* Catch-all for undefined routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { route } from "./routes";
import DashboardPage from "./pages/DashboardPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SigninPage />} />
        <Route path={route.SIGNUP} element={<SignupPage />} />
        <Route path={route.DASHBOARD} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

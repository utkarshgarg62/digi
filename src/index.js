import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminLogin";
import UserPage from "./components/UserLogin";
import RegisterAdmin from "./components/AdminRegister";
import RegisterUser from "./components/UserRegister";
import AddQuestion from "./components/AddQuestion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="admin-login" element={<AdminPage />}></Route>
        <Route path="user-login" element={<UserPage />}></Route>
        <Route path="admin-register" element={<RegisterAdmin />}></Route>
        <Route path="user-register" element={<RegisterUser />}></Route>
        <Route path="addquestion" element={<AddQuestion />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
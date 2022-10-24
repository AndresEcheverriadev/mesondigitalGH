import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginContextProvider from "./meta/LoginContext.js";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      {/* <LoginContextProvider > */}

        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/crear-cuenta" element={<RegisterPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>

      {/* </LoginContextProvider> */}
    </BrowserRouter>
  );
}

export default App;

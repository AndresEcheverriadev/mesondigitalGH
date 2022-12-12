import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { LoginContextProvider } from "../src/components/Context/LoginContext.js";
import UserPage from "./components/UserPage/UserPage.js";
import TramitePage from "./components/TramitePage/TramitePage.js";
import UserPageCuenta from "./components/UserPage/UserPageCuenta.js";
import UserPageTramites from "./components/UserPage/UserPageTramites.js";
import UserPageDocumentos from "./components/UserPage/UserPageDocumentos.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/crear-cuenta" element={<RegisterPage />} />
            <Route path="/perfil" element={<UserPage />} />
            <Route
              path="/tramite/:tramiteid/:upload"
              element={<TramitePage />}
            />
            <Route path="/perfil-cuenta" element={<UserPageCuenta />} />
            <Route path="/perfil-tramites" element={<UserPageTramites />} />
            <Route path="/perfil-documentos" element={<UserPageDocumentos />} />
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;

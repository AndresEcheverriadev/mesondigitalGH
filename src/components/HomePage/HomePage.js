import React from "react";
import Navbar from "../Navbar/Navbar";
import documentosPlantilla from "../../meta/documentosPlantilla.js";
import ContactForm from "../ContactForm/ContactForm";
import ilustracionHome from "../../images/ilustracionHome.svg";
import ilustracionFooter from "../../images/ilustracionHomeB.svg";
import Footer from "../Footer/Footer";
import "./HomePage.css";
import "./HomePageResponsive.css";
import TramiteCard from "../TramiteCard/TramiteCard.js";

function HomePage() {
  return (
    <>
      <div className="homePageMainContainer">
        <div className="viewHomeContainer">
          <header className="headerContainer">
            <Navbar />
          </header>

          <div className="homeTitlesContainer">
            <h1 className="homeTitle1">
              Resuelve tus trámites en menos tiempo.
            </h1>
            <h1 className="homeTitle2">Documentos notariales en línea.</h1>
          </div>

          <div className="argsContainer">
            <div className="prosContainer">
              <div className="prosBox">
                <p>Firma tus documentos y súbelos.</p>
              </div>

              <div className="prosBox">
                <p>Rellena documentos en línea.</p>
              </div>

              <div className="prosBox">
                <p>Agenda tu firma en la notaría mas cercana.</p>
              </div>
            </div>

            <img src={ilustracionHome} alt="" className="ilustracionHome" />
          </div>

          <div className="searchContainer">
            <div className="searchBar">
              <div class="searchBarInput form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingSearch"
                  placeholder="Password"
                ></input>
                <label for="floatingSearch">¿Qué trámite buscas?</label>
              </div>
              <div className="searchIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>

            <div className="selectorSearchContainer">
              <button className="selectorSearchBtn selectedSearchBtn">
                Mas solicitados
              </button>
              <button className="selectorSearchBtn">Laborales</button>
              <button className="selectorSearchBtn">Automóvil</button>
              <button className="selectorSearchBtn">Viaje</button>
              <button className="selectorSearchBtn">Familia</button>
              <button className="selectorSearchBtn">Casa/Departamento</button>
              <button className="selectorSearchBtn">Arriendo</button>
              <button className="selectorSearchBtn">Declaración jurada</button>
              <button className="selectorSearchBtn">Poder simple</button>
              <button className="selectorSearchBtn">Autorizaciones</button>
              <button className="selectorSearchBtn">Contratos</button>
              <button className="selectorSearchBtn">Empresas</button>
              <button className="selectorSearchBtn">Todos</button>
            </div>
          </div>
        </div>

        <hr />

        <main className="mainContainer">
          <h3>Selecciona tu Trámite en Línea</h3>
          <div className="tramitesCardsContainer">
            {documentosPlantilla.map((documento) => {
              return <TramiteCard key={documento.id} tramite={documento} />;
            })}
          </div>
        </main>
      </div>

      <div className="formContainer">
        <h3>Contactanos</h3>
        <ContactForm />
      </div>

      <div className="ilustracionFooter">
        <div className="footerTitles">
          <h3>Ahorra tiempo.</h3>
          <h3>Disfruta tu vida.</h3>
        </div>
        <img src={ilustracionFooter} alt="" />
      </div>

      <Footer />
    </>
  );
}

export default HomePage;

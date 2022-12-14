import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TramiteContext } from "../Context/TramiteContext";
import "./TramiteCard.css";

function TramiteCard({ tramite }) {
  const { handleUploadOption } = useContext(TramiteContext);

  const uploadCheckMode = (template, upload) => {
    if (template === true && upload === true) {
      return false;
    } else if (template === true && upload === false) {
      return false;
    } else if (template === false && upload === true) {
      return true;
    }
  };

  return (
    <NavLink
      to={`/tramite/${tramite.id}/upload=${uploadCheckMode(
        tramite.template,
        tramite.upload
      )}`}
      tramite={tramite}
      className="tramiteCard"
    >
      <div className="tramiteIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-file-text"
          viewBox="0 0 16 16"
        >
          <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
        </svg>
      </div>
      <div className="tramiteText">
        <h5>{tramite.title}</h5>
        <p>{tramite.subTitle}</p>
      </div>
      <div className="tramiteCardDocumentOptionsContainer">
        {tramite.template === true ? (
          <NavLink
            to={`/tramite/${tramite.id}/upload=false`}
            className="tramiteCardUploadOptionLink"
          >
            <button className="tramiteCardEditOptionBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
              Editar
            </button>
          </NavLink>
        ) : null}
        {tramite.upload === true ? (
          <NavLink
            to={`/tramite/${tramite.id}/upload=true`}
            className="tramiteCardUploadOptionLink"
          >
            <button
              onClick={() => handleUploadOption}
              className="tramiteCardUploadOptionBtn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-upload"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
              </svg>
              Cargar
            </button>
          </NavLink>
        ) : null}
      </div>
    </NavLink>
  );
}

export default TramiteCard;

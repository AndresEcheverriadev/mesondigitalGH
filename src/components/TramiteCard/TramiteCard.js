import React from "react";
import { NavLink } from "react-router-dom";
import "./TramiteCard.css";

function TramiteCard({ tramite }) {
  return (
    <NavLink
      to={`/tramite/${tramite.id}`}
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
      <div className="tramiteTagsContainer">
        {tramite.tags.map((tag) => {
          return (
            <div className="tramiteTag">
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
    </NavLink>
  );
}

export default TramiteCard;

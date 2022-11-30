import React from "react";
import { useParams } from "react-router-dom";
import documentosPlantilla from "../../meta/documentosPlantilla.js";
import "./TramitePage.css";

function TramitePage() {
  const { tramiteid } = useParams();
  const tramite = documentosPlantilla.find(
    (tramite) => tramite.id === tramiteid
  );

  return (
    <div className="tramitePageMainWrapper">
      <div className="tramitPageViewContainer">
        <div className="tramitePageEditor">Editor</div>
        <div className="tramitePageDocument">
          <div className=""></div>
          <div className="documentTemplate">
            <h5>{tramite.title}</h5>

            <p>FIRMA</p>
            <p>NOTARIO</p>
          </div>
        </div>
        <div className="tramitePageInfo">
          <button className="btnSend">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
            Enviar a Notaría
          </button>
          <button className="btnUpload">Subir documento</button>
        </div>
      </div>
    </div>
  );
}

export default TramitePage;

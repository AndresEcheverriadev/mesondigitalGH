import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import documentosPlantilla from "../../meta/documentosPlantilla.js";
import EditorSlider from "../EditorSlider/EditorSlider.js";
import membreteNotaria from "../../meta/membreteNotaria.png";
import { LoginContext } from "../Context/LoginContext.js";
import "./TramitePage.css";

function TramitePage() {
  const { tramiteid, upload } = useParams();
  const tramite = documentosPlantilla.find(
    (tramite) => tramite.id === tramiteid
  );
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const date = new Date();
  const day = date.getDate();
  const month = meses[date.getMonth()];
  const year = date.getFullYear();

  const { userData } = useContext(LoginContext);

  const documentFooterSignText = `Firmo ante mi ${userData.userNombre} ${userData.userPaterno} ${userData.userMaterno}, quien acredita su identidad con la cédula de
  identidad N° ${userData.userRut}.`;

  const documentFooterDateText = `Santiago,${day} de ${month} del ${year}`;

  const [uploadSwitch, setUploadSwitch] = useState(false);

  const uploadConvert = (upload) => {
    switch (upload) {
      case "upload=true":
        setUploadSwitch(true);
        break;
      case "upload=false":
        setUploadSwitch(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    uploadConvert(upload);
  }, [upload]);

  return (
    <div className="tramitePageMainWrapper">
      <div className="tramitPageViewContainer">
        <div className="tramitePageEditor">
          <h5 className="tramitePageEditorTitle">Crear Documento</h5>
          <EditorSlider
            uploadSwitch={uploadSwitch === true ? true : false}
            templateAble={tramite.template === true ? true : false}
            uploadAble={tramite.upload === true ? true : false}
          />
        </div>
        <div className="tramitePageDocument">
          <div className="documentTemplate">
            <div className="membreteNotaria">
              <img id="logoMembreteNotaria" src={membreteNotaria} alt="" />
            </div>
            <h5>{tramite.title}</h5>
            <div className="legalbodyText"></div>
            <div className="documentFooter">
              <p id="documentFooterFirmaSpace">Firma</p>
              <p id="documentFooterSign">{documentFooterSignText}</p>
              <p id="documentFooterDate">{documentFooterDateText} </p>

              <p id="documentFooterNotarioSpace">Notario</p>
            </div>
          </div>
        </div>
        <div className="tramitePageInfo">
          <button className="btnSend">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
            Enviar a Notaría
          </button>
          <div className="documentoInfo">
            <div className="documentRequiresContainer">
              <p className="documentRequiresTitle">
                Requerimientos del trámite
              </p>
              {tramite.requerimientos.map((req) => {
                return (
                  <div className="requirePod">
                    <div className="reqType">
                      {
                        {
                          Documento: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-files tramiteTypeIcon"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                            </svg>
                          ),
                          Comparencia: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-person tramiteTypeIcon"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                          ),
                          Condiciones: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-info-circle tramiteTypeIcon"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                          ),
                        }[req.tipo]
                      }
                      <p>{req.tipo}</p>
                    </div>
                    <p className="reqText">{req.reqText}</p>
                  </div>
                );
              })}
            </div>
            {tramite.observaciones ? (
              <div className="documentCommentsContainer">
                <p className="documentCommentsTitle">Recuerde</p>
                <p className="documentCommentsText">{tramite.observaciones}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TramitePage;

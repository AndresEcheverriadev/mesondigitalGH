import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import documentosPlantilla from "../../meta/documentosPlantilla.js";
import EditorSlider from "../EditorSlider/EditorSlider.js";
import membreteNotaria from "../../meta/membreteNotaria.png";
import { LoginContext } from "../Context/LoginContext.js";
import "./TramitePage.css";

function TramitePage() {
  const { tramiteid } = useParams();
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

  const [nameFile, setNameFile] = useState("");

  const changeNameFile = (e) => {
    setNameFile(e.target.files[0].name);
  };

  const documentFooterSignText = `Firmo ante mi ${userData.userNombre} ${userData.userPaterno} ${userData.userMaterno}, quien acredita su identidad con la cédula de
  identidad N° ${userData.userRut}.`;

  const documentFooterDateText = `Santiago,${day} de ${month} del ${year}`;

  return (
    <div className="tramitePageMainWrapper">
      <div className="tramitPageViewContainer">
        <div className="tramitePageEditor">
          <h5 className="tramitePageEditorTitle">Crear Documento</h5>
          <EditorSlider />
          <div className="documentUploadContainer">
            <label className="documentUploadLabel" htmlFor="documentLoadInput">
              <p>Seleccionar documento(pdf)</p>
              <input
                onChange={changeNameFile}
                id="documentLoadInput"
                type="file"
              />

              <div>
                {nameFile != "" ? (
                  <div className="uploadIconLoaded">
                    <svg
                      id="fileSelected"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      class="bi bi-filetype-pdf"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
                      />
                    </svg>
                    <div id="documentUploadInputFilename">
                      <p className="documentLoadNamefile" id="fileSelected">
                        {nameFile}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      class="bi bi-filetype-pdf"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
                      />
                    </svg>
                    <div id="documentUploadInputFilename">
                      <p className="documentLoadNamefile">...</p>
                    </div>
                  </div>
                )}
              </div>
            </label>
          </div>
          <div className="documentEditContainer">
            <input
              id="documentInput1"
              type="text"
              placeholder="Andres Echeverría Pinela "
            />
            <input id="documentInput2" type="text" placeholder="16.238.882-7" />

            <input
              id="documentInput3"
              type="text"
              placeholder="Santa Victoria 340"
            />
            <input
              id="documentInput4"
              type="text"
              placeholder="Santiago Centro"
            />
            <input
              id="documentInput5"
              type="text"
              placeholder="Ricardo Martinez"
            />
            <input id="documentInput6" type="text" placeholder="10.203.123-4" />
            <input
              id="documentInput6"
              type="text"
              placeholder=" frente a VTR S.A. en el reclamo por mala calidad del servicio"
            />
            <input id="documentInput7" type="text" placeholder="02" />
            <input id="documentInput8" type="text" placeholder="Diciembre" />
            <input id="documentInput9" type="text" placeholder="2022" />
          </div>
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
              {tramite.requerimentos.map((req) => {
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

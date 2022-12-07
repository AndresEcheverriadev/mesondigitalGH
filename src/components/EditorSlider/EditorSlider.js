import React, { useContext, useEffect, useState } from "react";
import { TramiteContext } from "../Context/TramiteContext";
import "./EditorSlider.css";

function EditorSlider({ templateAble, uploadAble }) {
  const { uploadOption } = useContext(TramiteContext);
  const [isChecked, setisChecked] = useState(false);

  useEffect(() => {
    if (uploadOption === true) {
      handleCheck();
    }
  }, [uploadOption]);

  const handleCheck = () => {
    setisChecked((current) => !current);
  };

  alert(isChecked);

  return (
    <div className="switchContainer">
      {templateAble === true ? (
        <div
          className="editOption"
          id={isChecked === false ? "selectedOption" : "disabledOption"}
        >
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
          <p> Editar plantilla</p>
        </div>
      ) : null}

      {templateAble === true && uploadAble === true ? (
        <label class="switch">
          <input type="checkbox" onChange={handleCheck} />
          <span class="slider round"></span>
        </label>
      ) : null}

      {uploadAble === true ? (
        <div
          className="uploadOption"
          id={isChecked === true ? "selectedOption" : "disabledOption"}
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
          <p> Cargar documento</p>
        </div>
      ) : null}
    </div>
  );
}

export default EditorSlider;

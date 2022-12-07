import React from "react";
import { createContext, useState } from "react";

const TramiteContext = createContext([]);

function TramiteContextProvider({ children }) {
  const [uploadOption, setuploadOption] = useState(false);

  const handleUploadOption = () => {
    alert("handleUploadOption");
    setuploadOption(!uploadOption);
  };
  return (
    <TramiteContext.Provider
      value={{
        uploadOption,
        handleUploadOption,
      }}
    >
      {children}
    </TramiteContext.Provider>
  );
}

export { TramiteContext, TramiteContextProvider };

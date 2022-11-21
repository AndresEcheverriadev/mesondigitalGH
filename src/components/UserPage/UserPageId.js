import React from "react";

function UserPageId({ user }) {
  return (
    <div className="welcomeText">
      <h4>Hola {user ? user.userNombre : ""}</h4>
      <h5>Bienvenido a tu cuenta {user ? user.userTipo : "usuario"}</h5>
    </div>
  );
}

export default UserPageId;

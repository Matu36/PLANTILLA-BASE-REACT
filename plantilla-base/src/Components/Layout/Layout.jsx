import React from "react";
import Home from "../../Pages/Home";
import { Link, Outlet } from "react-router-dom";

//Con el outlet renderizamos el componente PADRE Y el componente HIJO

const Layout = () => {
  //Outlet muestra el hijo

  return (
    <div>

      <span>Este es el Layout </span>

      <span>Acá abajo se renderiza el Home!</span>

      <Outlet />
    </div>
  );
};

export default Layout;

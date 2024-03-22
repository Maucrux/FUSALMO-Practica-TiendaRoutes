import React from "react";
import { NavLink as NL } from "react-router-dom";

const NavLink = ({ to, children, ...props }) => {
  /*los tres puntos son los espreeads es para tomar todas las cosas hasta losprops*/
  return (
    <NL
      {...props}
      className={({ isActive }) => {
        return isActive ? "is-active" : undefined;
      }}
      to={to}
    >
      {" "}
      {children}
    </NL>
  );
};

export default NavLink;

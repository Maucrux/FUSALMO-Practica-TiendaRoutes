import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Button, CenterInfo } from "../style-components/Stil_Comp";
import { theme } from "../style-components/theme";
const Celulares = () => {
  const { nameCelular } = useParams; //obtenemos las keys del segmento dinamico del parametro
  return (
    <CenterInfo>
      <ThemeProvider theme={theme}>
        <div className="features">
          <h2>Info de Celulares</h2>
          <h3>{nameCelular}</h3>
          <Link to="details">
            <Button>ver detalles</Button>
          </Link>
          <Outlet />
        </div>
      </ThemeProvider>
    </CenterInfo>
  );
};

export default Celulares;

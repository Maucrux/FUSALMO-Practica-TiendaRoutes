import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Button, CenterInfo } from "../style-components/Stil_Comp";
import { invertTheme, theme } from "../style-components/theme";
const Home = () => {
  return (
    <CenterInfo>
      <ThemeProvider theme={theme}>
        <div className="features">
          <h1>BIENVENIDOS</h1>
          <p>Somos una tienda online de celulares</p>
          <ThemeProvider theme={invertTheme}>
            <Link to="/search-page">
              <Button>ver mas</Button>
            </Link>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </CenterInfo>
  );
};

export default Home;

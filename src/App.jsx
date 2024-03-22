import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Header } from "./style-components/Stil_Comp";
// import { ThemeProvider }  from "styled-components";
// import { invertTheme, theme} from "./style-components/theme";
import Home from "./components/home";
import SearchPage from "./components/searchPage";
import Celulares from "./components/Celulares";
import CelularDetails from "./components/CelularDetails";
import NavLink from "./components/NavLink";
//Aqui iba DATACEL
//agregar ideas adicionales
//componentes para los detalles del celular seleccionado

function App() {
  return (
    <div>
      <Header>
        <div className="container">
          <img
            src="/img/logo.png"
            alt="LOGO PERSONALIZADO"
            height="100"
            width="100px"
          />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">PAGINA DE BUSQUEDA</NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/celulares/:nameCelular" element={<Celulares />}>
          <Route path="details" element={<CelularDetails />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

///
export default App;

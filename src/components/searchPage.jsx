import React from "react";
import { BtnLink, CenterInfo, StyledLink } from "../style-components/Stil_Comp";
const SearchPage = () => {
  const celulares = ["Samsung", "LG", "Xiaomi", "iPhone"];

  return (
    <CenterInfo>
      <div className="features">
        <h2>Pagina de Busqueda</h2>
        <ul>
          {celulares.map((celular) => (
            <li key={celular}>
              <StyledLink to={`/celulares/${celular}`}>
                <BtnLink>{celular}</BtnLink>
              </StyledLink>
            </li>
          ))}
        </ul>
      </div>
    </CenterInfo>
  );
};

export default SearchPage;

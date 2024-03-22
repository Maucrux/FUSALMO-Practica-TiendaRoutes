import React from "react";
import { useParams } from "react-router-dom";
import { DetailsCont } from "../style-components/Stil_Comp";
import dataCelu from "../data/dataCelu";

const CelularDetails = () => {
  const { nameCelular } = useParams();
  const detalles = dataCelu[nameCelular];
  return (
    <DetailsCont>
      <h3>Detalles del movil {nameCelular}</h3>
      <h4>Modelo: {detalles.modelo}</h4>
      <h4>Precio: {detalles.precio}</h4>
      <h4>Precio: {detalles.desc}</h4>
    </DetailsCont>

    /*outlet crea un hueco donde esta guardadon los detalles*/
  );
};

export default CelularDetails;

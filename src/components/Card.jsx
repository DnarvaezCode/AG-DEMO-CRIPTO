import React from "react";
import "animate.css";
export const Card = ({ resultado, loading }) => {
  return loading ? (
    <div className="card text-white bg-secondary mt-5 animate__bounceInRight">
      <p className="card-text text-center">Cargando...</p>
    </div>
  ) : resultado.PRICE ? (
    <div className="card text-white bg-secondary mt-5 animate__tada">
      <div className="card-body ">
        <h5 className="card-title">{resultado.PRICE}</h5>
        <p className="card-text">
          Precion mas alto: <strong>{resultado.HIGHDAY}</strong>
        </p>
        <p className="card-text">
          Precion mas bajo: <strong>{resultado.LOWDAY}</strong>
        </p>
        <p className="card-text">
          Variación ultimas 24 horas:{" "}
          <strong>{resultado.CHANGEPCT24HOUR}</strong>
        </p>
        <p className="card-text">
          Ultimas actualización: <strong>{resultado.LASTUPDATE}</strong>
        </p>
      </div>
    </div>
  ) : null;
};

import React from "react";
import "animate.css";
export const Card = ({ resultado }) => {
  return (
    <div className="card text-white bg-secondary mt-5 animate__bounceInRight">
      {/* <p className="card-text">No se encontró ningún resultado.</p> */}
      <div className="card-body">
        <h5 className="card-title">{resultado.PRICE}</h5>
        <p className="card-text">
          Precion mas alto: <strong>{resultado.HIGHDAY}</strong>
        </p>
        <p className="card-text">
          Precion mas bajo: <strong>{resultado.LOWDAY}</strong>
        </p>
        <p className="card-text">
          Variación ultimas 24 horas: <strong>{resultado.LOWDAY}</strong>
        </p>
        <p className="card-text">
          Ultimas actualización: <strong>{resultado.LOWDAY}</strong>
        </p>
      </div>
    </div>
  );
};

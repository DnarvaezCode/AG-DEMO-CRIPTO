import "animate.css";
export const Card = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = resultado;
  return (
    <div className="card text-white bg-secondary mt-5 animate__tada">
      <div className="card-body ">
        <h5 className="card-title">{PRICE}</h5>
        <p className="card-text">
          Precio más alto: <strong>{HIGHDAY}</strong>
        </p>
        <p className="card-text">
          Precio más bajo: <strong>{LOWDAY}</strong>
        </p>
        <p className="card-text">
          Variación ultimas 24 horas: <strong>{CHANGEPCT24HOUR}</strong>
        </p>
        <p className="card-text">
          Ultima actualización: <strong>{LASTUPDATE}</strong>
        </p>
      </div>
    </div>
  );
};

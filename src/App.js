import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Formulario } from "./components/Formulario";
import { Card } from "./components/Card";

function App() {
  const [listaCriptomoneda, setListaCriptomoneda] = useState([]);
  const [resultado, setResultado] = useState({});
  const [showCard, setShowCard] = useState(false);
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
  const listaMoneda = [
    { id: 1, moneda: "Dolar", simbolo: "USD" },
    { id: 2, moneda: "Euro", simbolo: "EUR" },
    { id: 3, moneda: "Peso Mexicano", simbolo: "MXN" },
    { id: 4, moneda: "Libra Esterlina", simbolo: "GBP" },
  ];
  const getData = async () => {
    try {
      const result = await axios.get(url);
      const { Data } = result.data;
      setListaCriptomoneda(Data);
    } catch (error) {
      throw new Error("No se puede cargar la información.");
    }
  };
  useEffect(() => {
    getData();
  }, [listaCriptomoneda]);

  return (
    <div className="container mt-5">
      <div className="text-center">
        <img
          style={{ width: "15%", height: "15%" }}
          src="https://th.bing.com/th/id/OIP.je8DZQdaTo5-wReggrmLqAHaEj?pid=ImgDet&rs=1"
          className="rounded"
          alt="..."
        />
      </div>

      <div className="row align-items-start">
        <div className="col">
          <Formulario
            listaMoneda={listaMoneda}
            listaCriptomoneda={listaCriptomoneda}
            setResultado={setResultado}
            setShowCard={setShowCard}
          />
        </div>
        <div className="col">{showCard && <Card resultado={resultado} />}</div>
      </div>
    </div>
  );
}

export default App;

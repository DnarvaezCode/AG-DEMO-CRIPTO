import "./App.css";
import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { Card } from "./components/Card";
import { listaMoneda } from "./helpers/listaMoneda";
import { Loader } from "./components/Loader";
import { obtenerMoneda } from "./api/index";

function App() {
  const [listaCriptomoneda, setListaCriptomoneda] = useState([]);
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const data = await obtenerMoneda();
    setListaCriptomoneda(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center">
        <img
          width="15%"
          height="15%"
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
            setLoading={setLoading}
          />
        </div>
        <div className="col">
          {loading ? (
            <Loader />
          ) : !resultado?.PRICE ? null : (
            <Card resultado={resultado} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

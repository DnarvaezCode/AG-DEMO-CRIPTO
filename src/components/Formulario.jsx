import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const Formulario = ({
  listaMoneda,
  listaCriptomoneda,
  setResultado,
  setShowCard,
}) => {
  const [simboloMoneda, setSimboloMoneda] = useState("");
  const [nombreCriptomoneda, setNombreCriptomoneda] = useState("");

  const getCriptomoneda = async (url) => {
    const result = await axios.get(url);
    setResultado(result.data.DISPLAY[nombreCriptomoneda][simboloMoneda]);
  };

  const cotizarPrecioActual = (e) => {
    try {
      e.preventDefault();
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${nombreCriptomoneda}&tsyms=${simboloMoneda}`;
      if (simboloMoneda.trim() === "" || nombreCriptomoneda.trim() === "") {
        Swal.fire({
          title: "Advertencia",
          icon: "warning",
          type: "warning",
          text: "Debe de seleccionar el tipo de moneda y criptomoneda.",
        });
        return;
      }

      setTimeout(() => {
        getCriptomoneda(url);
        setShowCard(true);
      }, 2000);
      setSimboloMoneda("");
      setNombreCriptomoneda("");
    } catch (error) {}
  };
  return (
    <form onSubmit={cotizarPrecioActual}>
      <fieldset>
        <legend>Consultar valor actual criptomoneda</legend>
        <div className="mb-3">
          <label className="form-label">Moneda</label>
          <select
            value={simboloMoneda}
            className="form-select"
            onChange={(e) => setSimboloMoneda(e.target.value)}
          >
            <option key={0} value={""} selected>
              - Selecciona la moneda --
            </option>
            {listaMoneda.map((item) => (
              <option key={item.id} value={item.simbolo}>
                {item.moneda}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Criptomoneda</label>
          <select
            value={nombreCriptomoneda}
            className="form-select"
            onChange={(e) => setNombreCriptomoneda(e.target.value)}
          >
            <option key={0} value={""} selected>
              -- Seleccione criptomoneda --
            </option>
            {listaCriptomoneda.map((item) => (
              <option key={item.CoinInfo.Id} value={item.CoinInfo.Name}>
                {item.CoinInfo.FullName}
              </option>
            ))}
          </select>
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-dark btn-block">
            COTIZAR
          </button>
        </div>
      </fieldset>
    </form>
  );
};

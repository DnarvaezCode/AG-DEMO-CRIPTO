import React, { useState } from "react";
import { obtenerInfoCripto } from "../api";
import { toast, Toaster } from "react-hot-toast";
import PropTypes from "prop-types";

export const Formulario = ({
  listaMoneda,
  listaCriptomoneda,
  setResultado,
  setLoading,
}) => {
  const [simboloMoneda, setSimboloMoneda] = useState("");
  const [nombreCriptomoneda, setNombreCriptomoneda] = useState("");

  const cotizarPrecioActual = async (e) => {
    try {
      e.preventDefault();
      if (simboloMoneda.trim() === "") {
        toast.error("Seleccione una moneda.");
        return;
      } else if (nombreCriptomoneda.trim() === "") {
        toast.error("Seleccione una criptomoneda.");
        return;
      }

      setLoading(true);
      const resultadoCripto = await obtenerInfoCripto(
        nombreCriptomoneda,
        simboloMoneda
      );
      setResultado(resultadoCripto);
      setLoading(false);
      setSimboloMoneda("");
      setNombreCriptomoneda("");
    } catch (error) {
      console.log(error);
    }
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
            <option key={0} value={""}>
              -- Selecciona la moneda --
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
            <option key={0} value={""}>
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
        <Toaster position="top-right" reverseOrder={false} />
      </fieldset>
    </form>
  );
};

Formulario.propTypes = {
  listaMoneda: PropTypes.array.isRequired,
};

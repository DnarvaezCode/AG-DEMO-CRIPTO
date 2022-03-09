import axios from "axios";
const baseUrl = `https://min-api.cryptocompare.com/data`;

export const obtenerMoneda = async () => {
  try {
    const uriMoneda = `${baseUrl}/top/mktcapfull?limit=10&tsym=USD`;
    const { data } = await axios.get(uriMoneda);
    const { Data } = data;
    return Data;
  } catch (error) {
    return error;
  }
};

export const obtenerInfoCripto = async (nombreCriptomoneda, simboloMoneda) => {
  try {
    const uriMoneda = `${baseUrl}/pricemultifull?fsyms=${nombreCriptomoneda}&tsyms=${simboloMoneda}`;
    const { data } = await axios.get(uriMoneda);
    return data.DISPLAY[nombreCriptomoneda][simboloMoneda];
  } catch (error) {
    return error;
  }
};

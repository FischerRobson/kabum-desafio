import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { api_cep } from "../consts/apis";

interface Cep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface DadosCep {
  logradouro: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  codigoUf: number,
  codigoCidade: string
}

const emitToastError = (message: string) => {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const buscarCep = async function (cep: string) {
  if (cep.length !== 8) {
    return null;
  }

  const dados = await axios
    .get<Cep>(api_cep(cep))
    .then(async (res: AxiosResponse) => {
      const { logradouro, complemento, bairro, localidade, uf, erro } = res.data;
      if (erro) {
        emitToastError("CEP inválido");
      } else {
        return {
          logradouro,
          complemento,
          bairro,
          cidade: localidade.toUpperCase(),
          uf,
        };
      }
    })
    .catch((err: Error) => {
      console.log(err.message);
      emitToastError("Ocorreu uma falha ao consultar o CEP!");
    });
  return dados;
};

export default buscarCep;

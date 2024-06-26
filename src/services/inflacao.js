import axios from "axios";
import consts from "@/constants/consts";

const BASE_URL = consts.API_URL;

function fetchIpcaProjecao(dt_ini, dt_fim) {
  return axios
    .get(`${BASE_URL}/inflacao/ipca/projecao/${dt_ini}/${dt_fim}/0`)
    .then((resp) => {
      if (resp) return resp.data;
    })
}

function fetchIpcaProjecaoMensal(dt_ini, dt_fim) {
  return axios
    .get(`${BASE_URL}/inflacao/ipca/projecao/mensal/${dt_ini}/${dt_fim}/0`)
    .then((resp) => {
      if (resp) return resp.data;
    })
}

export { fetchIpcaProjecao, fetchIpcaProjecaoMensal };

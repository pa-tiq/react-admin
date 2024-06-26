import axios from 'axios';
import consts from "@/constants/consts";

const BASE_URL = consts.API_URL;

function fetchProjecaoSalarioMinimo(num_aplicacao, tx_projecao_sm) {
  if (num_aplicacao === null) {
    return Promise.resolve([]);
  }
  return axios
    .get(`${BASE_URL}/planejamentofinanceiro/projecaosalariominimo/${num_aplicacao}/${tx_projecao_sm}`)
    .then((resp) => {
      return resp.data;
    });
}

function fetchProjecaoInvestimento(
  num_aplicacao,
  capitalinicial,
  valor_aplicacao_mensal,
  txjurosanual,
  txinflacaoanual,
  considerarIR,
  taxaIR
) {
  if (
    num_aplicacao === null ||
    capitalinicial === null ||
    valor_aplicacao_mensal === null ||
    txjurosanual === null ||
    txinflacaoanual === null
  ) {
    return Promise.resolve([]);
  }
  return axios
    .get(
      `${BASE_URL}/planejamentofinanceiro/projecao/${parseInt(num_aplicacao)}/${capitalinicial}/${valor_aplicacao_mensal}/${
        txjurosanual / 100
      }/${txinflacaoanual / 100}/${considerarIR}/${taxaIR / 100}`
    )
    .then((resp) => {
      return resp.data;
    });
}

function fetchViverdeRenda(
  num_aplicacao,
  capitalinicial,
  valor_aplicacao_mensal,
  txjurosanual,
  txinflacaoanual,
  num_retiradas_mensais
) {
  if (
    num_aplicacao === null ||
    capitalinicial === null ||
    valor_aplicacao_mensal === null ||
    txjurosanual === null ||
    txinflacaoanual === null ||
    num_retiradas_mensais === null
  ) {
    return Promise.resolve([]);
  }
  return axios
    .get(
      `${BASE_URL}/planejamentofinanceiro/viverderenda/${num_aplicacao}/${capitalinicial}/${valor_aplicacao_mensal}/${
        txjurosanual / 100
      }/${txinflacaoanual / 100}/${num_retiradas_mensais}`
    )
    .then((resp) => {
      return resp.data;
    });
}

function fetchMetaRendaVitalicia(
  num_aplicacao,
  capitalinicial,
  valor_aplicacao_mensal,
  txjurosanual,
  txinflacaoanual,
  num_retiradas_mensais,
  meta_renda_vitalicia
) {
  if (
    num_aplicacao === null ||
    capitalinicial === null ||
    valor_aplicacao_mensal === null ||
    txjurosanual === null ||
    txinflacaoanual === null ||
    num_retiradas_mensais === null ||
    meta_renda_vitalicia === null
  ) {
    return Promise.resolve([]);
  }
  return axios
    .get(
      `${BASE_URL}/planejamentofinanceiro/metarendavitalicia/${num_aplicacao}/${capitalinicial}/${valor_aplicacao_mensal}/${
        txjurosanual / 100
      }/${txinflacaoanual / 100}/${num_retiradas_mensais}/${meta_renda_vitalicia}`
    )
    .then((resp) => {
      //console.log(resp.data);
      return resp.data;
    });
}

function fetchExpectativaDeVida(idade) {
  if (idade === null) {
    return Promise.resolve([]);
  }
  return axios.get(`${BASE_URL}/planejamentofinanceiro/expectativavida/1/${idade}`).then((resp) => {
    return resp.data;
  });
}

export {
  fetchProjecaoInvestimento,
  fetchViverdeRenda,
  fetchExpectativaDeVida,
  fetchProjecaoSalarioMinimo,
  fetchMetaRendaVitalicia,
};

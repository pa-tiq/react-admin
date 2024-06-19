import * as React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function Sobre(): React.JSX.Element {
  return (
    <Card>
      <CardContent>
        <div>
          <Typography align="left" variant="h5">
            Tau Money
          </Typography>
          <Typography align="left" variant="body1">
            <h3>
              <b>A FERRAMENTA</b>
            </h3>
            <p>
              A ferramenta Tau Money tem como objetivo propiciar o planejamento e gerenciamento inteligente financeiro e
              de investimentos em Títulos Públicos, utilizando tecnologia avançada, com otimizações e simulações de
              cenários mais realistas.
            </p>
            <p>
              Nossa missão é capacitar indivíduos e empresas a tomar decisões financeiras, agregando valor à gestão
              financeira pessoal, minimizando riscos.
            </p>
            <p>
              Com um compromisso firme com a inovação tecnologica, buscamos transformar a forma como as pessoas lidam
              com suas decisões financeiras, ajudando-as a alcançar seus objetivos e a construir um futuro
              financeiramente seguro.
            </p>

            <h3>
              <b>OBJETIVOS</b>
            </h3>
            <p>
              A missão geral da Tau Money é ofertar soluções otimizadas e inovadoras nas áreas de planejamento
              financeiro e investimentos. A saber:
            </p>
            <p>
              <b>Uso de Tecnologia Avançada:</b> A empresa coloca um forte foco no uso de tecnologia avançada para
              fornecer suas soluções. Isso sugere que a empresa provavelmente usa análise de dados, algoritmos e outras
              ferramentas tecnológicas para ajudar seus clientes a tomar decisões financeiras informadas.
            </p>
            <p>
              <b>Simulações com Cenários Possíveis:</b> A Tau Money se destaca por sua capacidade de realizar simulações
              com cenários financeiros possíveis. Isso pode ser especialmente valioso para ajudar os clientes a
              entenderem os impactos de diferentes escolhas financeiras em seu futuro.
            </p>
            <p>
              <b>Agregação de Valor à Gestão Financeira Pessoal:</b> A missão destaca a intenção da Tau Money de agregar
              valor à gestão financeira pessoal de seus clientes. Isso significa que a empresa busca ajudar as pessoas a
              melhorar sua gestão financeira e alcançar seus objetivos financeiros pessoais.
            </p>
            <p>
              <b>Minimização de Riscos Financeiros:</b> A missão também menciona que a empresa busca minimizar os riscos
              de decisões financeiras. Isso indica que a Tau Money está comprometida em ajudar os clientes a tomar
              decisões mais seguras e reduzir a exposição a riscos financeiros indesejados.
            </p>

            <h3>
              <b>CONTATOS</b>
            </h3>
            <p>
              <a href="mailto:contato@taumoney.com.br" title="">
                contato@taumoney.com.br
              </a>
            </p>
            {/* 
          <p>
            <a href="mailto:thyago@taumoney.com.br" title="">
              thyago@taumoney.com.br
            </a>
          </p>
          <p>
            <a href="mailto:andre@taumoney.com.br" title="">
              andre@taumoney.com.br
            </a>
          </p>
          <p>
            <a href="mailto:lucas@taumoney.com.br" title="">
              lucas@taumoney.com.br
            </a>
          </p>
          */}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

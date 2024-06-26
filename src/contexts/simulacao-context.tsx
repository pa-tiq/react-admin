'use client';

import { fetchIpcaProjecao } from '@/services/inflacao';
import { toFormatDateYYYYMMDD3 } from '@/services/utils';
import React, { useEffect, useState } from 'react';

export interface SimulacaoContextValue {
  idadeAtual: number;
  setIdadeAtual: (newValue: number) => void;
  idadeAposentadoria: number;
  setIdadeAposentadoria: (newValue: number) => void;
  contribuicaoMensal: number;
  setContribuicaoMensal: (newValue: number) => void;
  contribuicaoPercSalarioMinimo: number;
  setContribuicaoPercSalarioMinimo: (newValue: number) => void;
  crescimentoRealPercSalarioMinimo: number;
  setCrescimentoRealPercSalarioMinimo: (newValue: number) => void;  
  jurosNominalAnual: number;
  setJurosNominalAnual: (newValue: number) => void;  
  inflacaoAnual: number;
  setInflacaoAnual: (newValue: number) => void;
}

export const SimulacaoContext = React.createContext<SimulacaoContextValue | undefined>(undefined);

export interface SimulacaoProvidedProps {
  children: React.ReactNode;
}

const SalarioMinimo = 1420;

export function SimulacaoProvider({ children }: SimulacaoProvidedProps): React.JSX.Element {
  const [idadeAtual, setIdadeAtual] = useState<number>(30);
  const [idadeAposentadoria, setIdadeAposentadoria] = useState<number>(65);
  const [contribuicaoMensal, setContribuicaoMensal] = useState<number>(200);
  const [contribuicaoPercSalarioMinimo, setContribuicaoPercSalarioMinimo] = useState<number>(14);
  const [crescimentoRealPercSalarioMinimo, setCrescimentoRealPercSalarioMinimo] = useState<number>(3.13);
  const [jurosNominalAnual, setJurosNominalAnual] = useState<number>(8.5);
  const [inflacaoAnual, setInflacaoAnual] = useState<number>(3.5);

  const [editingContribuicao, setEditingContribuicao] = useState<'mensal' | 'percentual' | null>(null);
  const handleMensalChange = (value: number) => {
    setEditingContribuicao('mensal');
    setContribuicaoMensal(value);
  };

  const handlePercentualChange = (value: number) => {
    setEditingContribuicao('percentual');
    setContribuicaoPercSalarioMinimo(value);
  };

  const currentDate = new Date();
  const nextDay = new Date(currentDate);

  currentDate.setDate(currentDate.getDate() - 15);
  nextDay.setDate(nextDay.getDate() + 15);

  fetchIpcaProjecao

  useEffect(() => {
    if (editingContribuicao === 'mensal') {
      const percentage = Math.floor(100 * (contribuicaoMensal / SalarioMinimo));
      setContribuicaoPercSalarioMinimo(percentage);
    } else if (editingContribuicao === 'percentual') {
      const monthlyContribution = Math.round((contribuicaoPercSalarioMinimo / 100) * SalarioMinimo);
      setContribuicaoMensal(monthlyContribution);
    }
  }, [contribuicaoMensal, contribuicaoPercSalarioMinimo, editingContribuicao]);

  useEffect(() => {
    const fetchIpca = async () => {
      try{
        const currentDate = new Date();
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);

        const resp = await fetchIpcaProjecao(
          toFormatDateYYYYMMDD3(currentDate),
          toFormatDateYYYYMMDD3(nextDay)
        );

        const ipca_belief = resp?.[0]?.ipca_belief;
        if (ipca_belief !== null && ipca_belief !== undefined) {
          setInflacaoAnual(Math.round((Math.pow(1 + ipca_belief / 100, 12) - 1) * 10000) / 100);
        }
      } catch(error){
        console.error("Error fetching data:", error);
      }      
    }
    fetchIpca();
  },[]);

  return (
    <SimulacaoContext.Provider
      value={{
        idadeAtual,
        setIdadeAtual,
        idadeAposentadoria,
        setIdadeAposentadoria,
        contribuicaoMensal,
        setContribuicaoMensal: handleMensalChange,
        contribuicaoPercSalarioMinimo,
        setContribuicaoPercSalarioMinimo: handlePercentualChange,
        crescimentoRealPercSalarioMinimo,
        setCrescimentoRealPercSalarioMinimo,
        jurosNominalAnual,
        setJurosNominalAnual,
        inflacaoAnual,
        setInflacaoAnual
      }}
    >
      {children}
    </SimulacaoContext.Provider>
  );
}

export const SimulacaoConsumer = SimulacaoContext.Consumer;

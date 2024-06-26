'use client';

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

  const [editingContribuicao, setEditingContribuicao] = useState<'mensal' | 'percentual' | null>(null);
  const handleMensalChange = (value: number) => {
    setEditingContribuicao('mensal');
    setContribuicaoMensal(value);
  };

  const handlePercentualChange = (value: number) => {
    setEditingContribuicao('percentual');
    setContribuicaoPercSalarioMinimo(value);
  };

  useEffect(() => {
    if (editingContribuicao === 'mensal') {
      const percentage = Math.floor(100 * (contribuicaoMensal / SalarioMinimo));
      setContribuicaoPercSalarioMinimo(percentage);
    } else if (editingContribuicao === 'percentual') {
      const monthlyContribution = Math.round((contribuicaoPercSalarioMinimo / 100) * SalarioMinimo);
      setContribuicaoMensal(monthlyContribution);
    }
  }, [contribuicaoMensal, contribuicaoPercSalarioMinimo, editingContribuicao]);

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
      }}
    >
      {children}
    </SimulacaoContext.Provider>
  );
}

export const SimulacaoConsumer = SimulacaoContext.Consumer;

"use client";

import * as React from "react";

export interface SimulacaoContextValue {
  idadeAtual: number;
  setIdadeAtual: (newValue: number) => void;
}

export const SimulacaoContext = React.createContext<
  SimulacaoContextValue | undefined
>(undefined);

export interface SimulacaoProvidedProps {
  children: React.ReactNode;
}

export function SimulacaoProvider({
  children,
}: SimulacaoProvidedProps): React.JSX.Element {
  const [idadeAtual, setIdadeAtual] = React.useState(30);

  return (
    <SimulacaoContext.Provider value={{ idadeAtual, setIdadeAtual }}>
      {children}
    </SimulacaoContext.Provider>
  );
}

export const SimulacaoConsumer = SimulacaoContext.Consumer;

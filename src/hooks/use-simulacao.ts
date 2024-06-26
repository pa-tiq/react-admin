import * as React from 'react';
import type { SimulacaoContextValue } from '@/contexts/simulacao-context';
import { SimulacaoContext } from '@/contexts/simulacao-context';

export function useSimulacao(): SimulacaoContextValue {
  const context = React.useContext(SimulacaoContext);

  if (!context) {
    throw new Error('useSimulacao must be used within a SimulacaoProvider');
  }

  return context;
}

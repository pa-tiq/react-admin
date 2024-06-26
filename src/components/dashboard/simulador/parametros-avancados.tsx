'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Percent, PiggyBank } from '@phosphor-icons/react';
import { CurrencyCircleDollar } from '@phosphor-icons/react/dist/ssr';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';

import { useSimulacao } from '@/hooks/use-simulacao';
import { CardSliderInput } from '@/components/core/card-slider-input';

export function ParametrosAvancados(): React.JSX.Element {
  const { contribuicaoPercSalarioMinimo, setContribuicaoPercSalarioMinimo } = useSimulacao();

  const [crescimentoRealSalarioMinimo, setCrescimentoRealSalarioMinimo] = React.useState(3.13);
  const [jurosNominalAnual, setJurosNominalAnual] = React.useState(10.25);
  const [inflacaoAnual, setInflacaoAnual] = React.useState(1.45);
  const [jurosRealAnual, setJurosRealAnual] = React.useState(8.67);
  const [metaRendaMensalVitalicia, setMetaRendaMensalVitalicia] = React.useState(8247.43);

  const gridItemProps = { xs: 12, sm: 6, md: 4, lg: 3 };

  return (
    <Card>
      <CardHeader title="Parâmetros Avançados" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid {...gridItemProps}>
            <CardSliderInput
              title={'Contribuição Sal. Mínimo'}
              value={contribuicaoPercSalarioMinimo}
              onChange={(newValue) => setContribuicaoPercSalarioMinimo(newValue)}
              icon={<Percent />}
              minValue={5}
              maxValue={500}
              inputSuffix={'%'}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

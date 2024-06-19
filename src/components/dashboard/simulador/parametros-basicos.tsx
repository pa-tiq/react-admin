'use client';

import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { CardSliderInput } from '@/components/core/card-slider-input';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';

export function ParametrosBasicos(): React.JSX.Element {
  const [idadeAtual, setIdadeAtual] = React.useState(30);
  const [idadeAposentadoria, setIdadeAposentadoria] = React.useState(30);

  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <CardSliderInput
          title={"Idade Atual"}
          value={idadeAtual}
          onChange={(newValue) => setIdadeAtual(newValue)}
          icon={<UsersIcon fontSize="var(--icon-fontSize-lg)" />}
        />        
      </Grid>      
      <Grid lg={3} sm={6} xs={12}>
      <CardSliderInput
          title={"Aposentadoria"}
          value={idadeAposentadoria}
          onChange={(newValue) => setIdadeAposentadoria(newValue)}
          icon={<UsersIcon fontSize="var(--icon-fontSize-lg)" />}
        />
      </Grid>
      <Grid lg={3} sm={6} xs={12}></Grid>
      <Grid lg={3} sm={6} xs={12}></Grid>
    </Grid>
  );
}

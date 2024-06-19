import * as React from 'react';
import { Slider, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import SliderInput from '@/components/core/sliderInput';

import { IdadeAtual } from './idade-atual';

export function ParametrosBasicos(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <IdadeAtual sx={{ height: '100%' }} value="1.6k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}></Grid>
      <Grid lg={3} sm={6} xs={12}></Grid>
      <Grid lg={3} sm={6} xs={12}></Grid>
    </Grid>
  );
}

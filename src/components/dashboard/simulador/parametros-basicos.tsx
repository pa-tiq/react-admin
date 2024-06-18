import * as React from 'react';
import { Slider, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { StyledEngineProvider } from '@mui/material/styles';
import SliderInput from '@/components/core/sliderInput';

export function ParametrosBasicos(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <StyledEngineProvider injectFirst>
          <SliderInput />
        </StyledEngineProvider>
      </Grid>
      <Grid lg={3} sm={6} xs={12}></Grid>
      <Grid lg={3} sm={6} xs={12}></Grid>
      <Grid lg={3} sm={6} xs={12}></Grid>
    </Grid>
  );
}

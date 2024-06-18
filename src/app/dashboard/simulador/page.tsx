import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { Simulador } from '@/components/dashboard/simulador/simulador';

export const metadata = { title: `Simulador de Renda Futura | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Simulador de Renda Futura</Typography>
      </div>
      <Simulador />
    </Stack>
  );
}

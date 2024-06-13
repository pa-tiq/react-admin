import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { Sobre } from '@/components/dashboard/sobre/sobre';


export const metadata = { title: `Sobre | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Sobre</Typography>
      </div>
        <Sobre/>
    </Stack>
  );
}
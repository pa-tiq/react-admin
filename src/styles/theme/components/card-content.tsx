import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiCardContent = {
  styleOverrides: { root: { padding: '30px 24px', '&:last-child': { paddingBottom: '30px' } } },
} satisfies Components<Theme>['MuiCardContent'];

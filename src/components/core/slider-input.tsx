'use client'; // o styled exige renderização no lado do cliente

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiInput from '@mui/material/Input';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Stack, padding } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { Icon } from '@phosphor-icons/react';

const Input = styled(MuiInput)(({ theme }) => ({
  width: 75,
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  lineHeight: theme.typography.h4.lineHeight,
  textAlign: 'center',
  '& input': {
    textAlign: 'center',
    padding: 0,
    width: '100%',

  },
  position: 'relative', 
  top: '50%',          
  transform: 'translateX(100%)', 
}));

export interface SliderInputProps {
  title: string;
  value: number;
  onChange: (newValue: number) => void;
  icon: React.JSX.Element
}

export default function SliderInput({ title, value, onChange, icon }: SliderInputProps): React.JSX.Element {

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    onChange(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === '' ? 0 : Number(event.target.value);
    onChange(newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      onChange(0);
    } else if (value > 100) {
      onChange(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
        <Stack spacing={1}>
          <Typography id="input-slider" color="text.secondary" variant="overline">
            {title}
          </Typography>
          <Input
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Stack>
        <Avatar sx={{ backgroundColor: 'var(--mui-palette-success-main)', height: '56px', width: '56px', marginTop:'-10px' }}>
          {icon}
        </Avatar>
      </Stack>
      <Stack spacing={2} style={{padding: '10px', marginBottom:'-10px'}}>
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
        />
      </Stack>
    </Box>
  );
}

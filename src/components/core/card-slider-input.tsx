'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import SliderInput from '@/components/core/slider-input';

export interface CardSliderInputProps {
  title: string;
  value: number;
  onChange: (newValue: number) => void;
  icon: React.JSX.Element
}

export function CardSliderInput({title,value,onChange,icon}: CardSliderInputProps): React.JSX.Element {
  return (
    <Card sx={{height: '100%'}}>
      <CardContent>
        <Stack spacing={2}>
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <SliderInput 
              title={title} 
              value={value}
              onChange={onChange} 
              icon={icon}/>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

"use client"; // o styled exige renderização no lado do cliente

import * as React from "react";
import Box from "@mui/material/Box";
import MuiInput from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Avatar from "@mui/material/Avatar";

const Input = styled(MuiInput)(({ theme }) => ({
  minWidth: 75,
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  lineHeight: theme.typography.h4.lineHeight,
  textAlign: "center",
  "& input": {
    textAlign: "center",
    padding: 0,
    width: "auto",
  },
}));

export interface SliderInputProps {
  title: string;
  value: number;
  onChange: (newValue: number) => void;
  icon: React.JSX.Element;
  minValue: number;
  maxValue: number;
}

export default function SliderInput({
  title,
  value,
  onChange,
  icon,
  minValue,
  maxValue
}: SliderInputProps): React.JSX.Element {

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    onChange(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === "" ? 0 : Number(event.target.value);
    onChange(newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      onChange(0);
    } else if (value > maxValue) {
      onChange(maxValue);
    }
  };

  return (
    <Box>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width :'100%'}}>
          <Typography
            id="input-slider"
            color="text.secondary"
            variant="overline"
            sx={{flexGrow: 1}}
          >
            {title}
          </Typography>
          <Avatar
            sx={{
              backgroundColor: "var(--mui-palette-success-main)",
              height: "56px",
              width: "56px",
              marginTop: "-10px",
            }}
          >
            {icon}
          </Avatar>
        </Stack>
        <Stack alignItems="center">
          <Input
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: minValue,
              max: maxValue,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Stack>
      </Stack>
      <Stack spacing={2} style={{ padding: "10px", marginBottom: "-10px" }}>
        <Slider
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          min={minValue}
          max={maxValue} 
        />
      </Stack>
    </Box>
  );
}

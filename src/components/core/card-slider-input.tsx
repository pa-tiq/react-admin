"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import SliderInput from "@/components/core/slider-input";

export interface CardSliderInputProps {
  title: string;
  value: number;
  onChange: (newValue: number) => void;
  icon: React.JSX.Element;
  minValue: number;
  maxValue: number;
}

export function CardSliderInput({
  title,
  value,
  onChange,
  icon,
  minValue,
  maxValue,
}: CardSliderInputProps): React.JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <SliderInput
          title={title}
          value={value}
          onChange={onChange}
          icon={icon}
          minValue={minValue}
          maxValue={maxValue}
        />
      </CardContent>
    </Card>
  );
}

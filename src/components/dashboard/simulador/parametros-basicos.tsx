"use client";

import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CardSliderInput } from "@/components/core/card-slider-input";
import { Users as UsersIcon } from "@phosphor-icons/react/dist/ssr/Users";

export function ParametrosBasicos(): React.JSX.Element {
  const [idadeAtual, setIdadeAtual] = React.useState(30);
  const [idadeAposentadoria, setIdadeAposentadoria] = React.useState(65);
  const [contribuicaoMensal, setContribuicaoMensal] = React.useState(200);

  return (
    <Grid container spacing={3}>
      <Grid lg={2.5} sm={6} xs={12}>
        <CardSliderInput
          title={"Idade Atual"}
          value={idadeAtual}
          onChange={(newValue) => setIdadeAtual(newValue)}
          icon={<UsersIcon fontSize="var(--icon-fontSize-lg)" />}
          minValue={0}
          maxValue={100}  
        />
      </Grid>
      <Grid lg={2.5} sm={6} xs={12}>
        <CardSliderInput
          title={"Idade Aposentadoria"}
          value={idadeAposentadoria}
          onChange={(newValue) => setIdadeAposentadoria(newValue)}
          icon={<UsersIcon fontSize="var(--icon-fontSize-lg)" />}
          minValue={0}
          maxValue={100}  
        />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <CardSliderInput
          title={"Contribuição Mensal"}
          value={contribuicaoMensal}
          onChange={(newValue) => setContribuicaoMensal(newValue)}
          icon={<UsersIcon fontSize="var(--icon-fontSize-lg)" />}
          minValue={50}
          maxValue={7000}          
        />
      </Grid>
      <Grid lg={3} sm={6} xs={12}></Grid>
    </Grid>
  );
}

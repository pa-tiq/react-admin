"use client";

import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CardSliderInput } from "@/components/core/card-slider-input";
import { Users as UsersIcon } from "@phosphor-icons/react/dist/ssr/Users";
import { CurrencyCircleDollar } from "@phosphor-icons/react/dist/ssr";
import { PiggyBank } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import { useSimulacao } from "@/hooks/use-simulacao";

export function ParametrosBasicos(): React.JSX.Element {
  const [expectativaVida, setExpectativaVida] = React.useState(80);

  //const [idadeAtual, setIdadeAtual] = React.useState(30);

  const {idadeAtual, setIdadeAtual }= useSimulacao();

  const [idadeAposentadoria, setIdadeAposentadoria] = React.useState(65);
  const [contribuicaoMensal, setContribuicaoMensal] = React.useState(200);
  const [aporteInicial, setAporteInicial] = React.useState(0);

  const gridItemProps = { xs: 12, sm: 6, md: 4, lg: 3 }

  return (
    <Card>
      <CardHeader title="Parâmetros Básicos" />
      <Divider />
      <CardContent>
      <Grid container spacing={2.5}>
        <Grid {...gridItemProps}>
          <CardSliderInput
            title={"Idade Atual"}
            value={idadeAtual}
            onChange={(newValue) => setIdadeAtual(newValue)}
            icon={<UsersIcon />}
            minValue={0}
            maxValue={100}
            inputSuffix={"Anos"}
          />
        </Grid>
        <Grid {...gridItemProps}>
          <CardSliderInput
            title={"Idade Aposentadoria"}
            value={idadeAposentadoria}
            onChange={(newValue) => setIdadeAposentadoria(newValue)}
            icon={<UsersIcon />}
            minValue={idadeAtual + 1}
            maxValue={expectativaVida + idadeAtual < 101 ? expectativaVida + idadeAtual : 101}
            inputSuffix={"Anos"}
          />
        </Grid>
        <Grid {...gridItemProps}>
          <CardSliderInput
            title={"Contribuição Mensal"}
            value={contribuicaoMensal}
            onChange={(newValue) => setContribuicaoMensal(newValue)}
            icon={<CurrencyCircleDollar />}
            minValue={50}
            maxValue={7000}
            inputPrefix={"R$"}
          />
        </Grid>
        <Grid {...gridItemProps}>
          <CardSliderInput
            title={"Aporte Inicial"}
            value={aporteInicial}
            onChange={(newValue) => setAporteInicial(newValue)}
            icon={<PiggyBank />}
            minValue={0}
            maxValue={100000}
            inputPrefix={"R$"}
          />
        </Grid>
      </Grid>
      </CardContent>
    </Card>
  );
}

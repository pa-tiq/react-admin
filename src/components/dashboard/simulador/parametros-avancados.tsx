"use client";

import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CardSliderInput } from "@/components/core/card-slider-input";
import { Users as UsersIcon } from "@phosphor-icons/react/dist/ssr/Users";
import { CurrencyCircleDollar } from "@phosphor-icons/react/dist/ssr";
import { Percent, PiggyBank } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";

export function ParametrosAvancados(): React.JSX.Element {
  const [contribuicaoSalarioMinimo, setContribuicaoSalarioMinimo] = React.useState(14);
  const [crescimentoRealSalarioMinimo, setCrescimentoRealSalarioMinimo] = React.useState(3.13);
  const [jurosNominalAnual, setJurosNominalAnual] = React.useState(10.25);
  const [inflacaoAnual, setInflacaoAnual] = React.useState(1.45);
  const [jurosRealAnual, setJurosRealAnual] = React.useState(8.67);
  const [metaRendaMensalVitalicia, setMetaRendaMensalVitalicia] = React.useState(8247.43);

  const gridItemProps = { xs: 12, sm: 6, md: 4, lg: 3 };

  return (
    <Card>
      <CardHeader title="Parâmetros Avançados" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
        <Grid {...gridItemProps}>
          <CardSliderInput
            title={"Contribuição Sal. Mínimo"}
            value={contribuicaoSalarioMinimo}
            onChange={(newValue) => setContribuicaoSalarioMinimo(newValue)}
            icon={<Percent />}
            minValue={0}
            maxValue={100}
            inputSuffix={"%"}
          />
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

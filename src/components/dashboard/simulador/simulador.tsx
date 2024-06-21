import * as React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ParametrosBasicos } from "./parametros-basicos";
import { ParametrosAvancados } from "./parametros-avancados";

export function Simulador(): React.JSX.Element {
  return (
    <>
      <ParametrosBasicos />
      <ParametrosAvancados />
    </>
  );
}

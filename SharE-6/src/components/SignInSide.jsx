import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Background from "./Background";
import Forum from "./Forum";
import { useState } from "react";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const [situ, setSitu] = useState(false);
  const situChanger = () => {
    situ ? setSitu(false) : setSitu(true);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        {situ ? (
          <>
            <Background />
            <Forum changer={situChanger} situ={situ} />
          </>
        ) : (
          <>
            <Forum changer={situChanger} situ={!situ} />
            <Background />
          </>
        )}
      </Grid>
    </ThemeProvider>
  );
}

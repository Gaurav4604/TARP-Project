import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import "./App.css";
import appTheme from "./components/utils/Theme";

const App = ({ theme }) => {
  console.log(createTheme(theme));
  return (
    <Stack direction="row">
      <ThemeProvider theme={appTheme}>
        <ThemeProvider theme={theme}>
          <Stack id="builder-page"></Stack>
        </ThemeProvider>
        <Stack id="editor-panel" />
      </ThemeProvider>
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps, {})(App);

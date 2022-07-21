import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import "./App.css";
import ComponentCard from "./components/utils/components/ComponentCard";
import appTheme from "./components/utils/Theme";
import config from "./redux/Utils/componentConfig";

const renderCards = () => {
  return config.root.map((component, index) => (
    <ComponentCard {...component} key={index} />
  ));
};

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <Stack direction="row" id="application">
        <Stack id="builder-page">
          <ThemeProvider theme={createTheme(theme)}>
            {renderCards()}
          </ThemeProvider>
        </Stack>
        <Stack id="editor-panel" />
      </Stack>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps, {})(App);

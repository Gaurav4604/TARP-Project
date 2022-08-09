import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import "./App.css";
import ComponentCard from "./components/utils/components/ComponentCard";
import appTheme from "./components/utils/Theme";
import ListRenderer from "./ListRenderer";
import config from "./redux/Utils/componentConfig";

const renderCards = () => {
  return config.root.map((component) => (
    <ComponentCard {...component} key={component.caption} />
  ));
};

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <Stack id="application">
        <Stack id="builder-page">
          <ThemeProvider theme={createTheme(theme)}>
            <ListRenderer />
          </ThemeProvider>
        </Stack>

        <Stack id="editor-panel">{renderCards()}</Stack>
      </Stack>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  };
};

export default connect(mapStateToProps)(App);

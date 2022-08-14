import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import ComponentContextMenu from "./components/utils/ComponentContextMenu";
import ComponentPanel from "./components/utils/ComponentPanel";
import appTheme from "./components/utils/Theme";
import TreeRenderer from "./TreeRenderer";
import { captureMousePos } from "./redux/Utils/UtilsActions";
import AddFAB from "./components/utils/AddFAB";

const App = ({ theme, captureMousePos }) => {
  useEffect(() => {
    const stateMouseMove = (e) => captureMousePos(e);
    window.addEventListener("mousemove", stateMouseMove);
    return () => {
      window.removeEventListener("mousemove", stateMouseMove);
    };
  }, [captureMousePos]);

  return (
    <ThemeProvider theme={appTheme}>
      <Stack id="application">
        <ComponentContextMenu />
        <ComponentPanel />
        <AddFAB />
        <Stack id="builder-page">
          <ThemeProvider theme={createTheme(theme)}>
            <TreeRenderer />
          </ThemeProvider>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ theme, componentTree }) => {
  const { components } = componentTree;
  return {
    theme,
    components,
  };
};

export default connect(mapStateToProps, { captureMousePos })(App);

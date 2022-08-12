import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import ComponentContextMenu from "./components/utils/ComponentContextMenu";
import ComponentPanel from "./components/utils/ComponentPanel";
import appTheme from "./components/utils/Theme";
import TreeRenderer from "./TreeRenderer";
import { toggleContextMenu, captureMousePos } from "./redux/Utils/UtilsActions";

const App = ({ theme, toggleContextMenu, captureMousePos }) => {
  useEffect(() => {
    const stateMouseMove = (e) => captureMousePos(e);
    window.addEventListener("mousemove", stateMouseMove);
    return () => {
      window.removeEventListener("mousemove", stateMouseMove);
    };
  }, [captureMousePos]);

  return (
    <ThemeProvider theme={appTheme}>
      <Stack
        id="application"
        onContextMenu={(e) => {
          toggleContextMenu(true, "frame");
          e.preventDefault();
        }}
      >
        <ComponentContextMenu />
        <ComponentPanel />
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

export default connect(mapStateToProps, { toggleContextMenu, captureMousePos })(
  App
);

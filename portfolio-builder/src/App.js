import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import ComponentContextMenu from "./components/utils/ComponentContextMenu";
import ComponentPanel from "./components/utils/ComponentPanel";
import appTheme from "./components/utils/Theme";
import ListRenderer from "./ListRenderer";
import { toggleContextMenu, captureMousePos } from "./redux/Utils/UtilsActions";

const App = ({ theme, toggleContextMenu, captureMousePos }) => {
  useEffect(() => {
    const stateMouseMove = (e) => captureMousePos(e);

    window.addEventListener("mousemove", stateMouseMove);

    return () => {
      window.removeEventListener("mousemove", stateMouseMove);
    };
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <Stack
        id="application"
        onContextMenu={(e) => {
          toggleContextMenu(true);
          e.preventDefault();
        }}
      >
        <ComponentContextMenu />
        <ComponentPanel />
        <Stack id="builder-page">
          <ThemeProvider theme={createTheme(theme)}>
            <ListRenderer />
          </ThemeProvider>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  };
};

export default connect(mapStateToProps, { toggleContextMenu, captureMousePos })(
  App
);

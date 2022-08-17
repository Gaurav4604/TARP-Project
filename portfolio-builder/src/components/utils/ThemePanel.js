import React from "react";
import { Drawer, Stack } from "@mui/material";
import { connect } from "react-redux";
import { toggleThemePanel } from "../../redux/Utils/UtilsActions";

const ThemePanel = ({ themeOpen, toggleThemePanel }) => {
  return (
    <Drawer
      id="theme-panel"
      anchor={"right"}
      open={themeOpen}
      onClose={() => toggleThemePanel(false)}
    >
      <Stack
        sx={{ width: "10rem", height: "100%" }}
        role="presentation"
        alignItems="center"
        justifyContent="center"
      ></Stack>
    </Drawer>
  );
};

const mapStateToProps = ({ utils }) => {
  const { themeOpen } = utils;
  return {
    themeOpen,
  };
};

export default connect(mapStateToProps, { toggleThemePanel })(ThemePanel);

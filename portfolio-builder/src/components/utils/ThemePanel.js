import React from "react";
import { Drawer, Stack } from "@mui/material";
import { connect } from "react-redux";
import { toggleThemePanel } from "../../redux/Utils/UtilsActions";
import { jsonTreeSearch } from "../../redux/ComponentTree/ComponentTreeActions";
import { useEffect } from "react";
import { setThemeValue } from "../../redux/Theme/themeActions";

const ThemePanel = ({
  themeOpen = false,
  toggleThemePanel,
  styleConfig = {},
  metadata = {},
  setThemeValue,
}) => {
  console.log(styleConfig, metadata);

  useEffect(() => {
    if (Object.keys(styleConfig).length > 0) {
      setThemeValue({
        id: metadata.id,
        className: metadata.className,
        value: {
          property: "backgroundColor",
          value: "rgb(200, 200, 0)",
          unit: "",
        },
      });
    }
  }, [styleConfig, metadata, setThemeValue]);

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

const mapStateToProps = ({ utils, componentTree }) => {
  const { themeOpen, contextMenu } = utils;
  const { metadata } = contextMenu;
  if (Object.keys(metadata).length > 0) {
    const node = jsonTreeSearch({
      components: [{ ...componentTree[metadata.className.split(" ")[0]] }],
      className: metadata.className,
      id: metadata.id,
    });

    const { styleConfig } = node;
    return {
      metadata,
      themeOpen,
      styleConfig,
    };
  }
  return {};
};

export default connect(mapStateToProps, { toggleThemePanel, setThemeValue })(
  ThemePanel
);

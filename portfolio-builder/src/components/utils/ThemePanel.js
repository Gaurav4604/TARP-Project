import React from "react";
import { Drawer, Stack } from "@mui/material";
import { connect } from "react-redux";
import { toggleThemePanel } from "../../redux/Utils/UtilsActions";
import { jsonTreeSearch } from "../../redux/ComponentTree/ComponentTreeActions";
import { setThemeValue } from "../../redux/Theme/themeActions";
import Unit from "../theme/Unit";
import ColorPicker from "../theme/ColorPicker";
import Flex from "../theme/Flex";
import DataInput from "../theme/DataInput";

const ThemePanel = ({
  themeOpen = false,
  toggleThemePanel,
  styleConfig = {},
  node,
}) => {
  const renderStyleModifiers = () => {
    const configurations = Object.entries(styleConfig);
    return configurations.map((config, index) => {
      switch (config[1].type) {
        case "Unit":
          const { min, max, unit, step } = config[1];
          return (
            <Unit
              {...{ min, max, unit, step }}
              property={config[0]}
              node={node}
              key={index}
            />
          );
        case "Color":
          return <ColorPicker property={config[0]} node={node} key={index} />;
        case "Flex":
          const { alignItems, justifyContent, flexDirection } = config[1];
          return (
            <Flex
              node={node}
              {...{ alignItems, justifyContent, flexDirection }}
              key={index}
            />
          );
        case "ImageSource":
          return <DataInput propName={config[0]} node={node} key={index} />;
        case "TextData":
          return <DataInput propName={config[0]} node={node} key={index} />;
        default:
          return undefined;
      }
    });
  };

  return (
    <Drawer
      id="theme-panel"
      anchor={"right"}
      open={themeOpen}
      onClose={() => toggleThemePanel(false)}
    >
      <Stack
        id="theme-panel"
        role="presentation"
        alignItems="center"
        justifyContent="center"
      >
        {renderStyleModifiers()}
      </Stack>
    </Drawer>
  );
};

const mapStateToProps = ({ utils, componentTree }) => {
  const { themeOpen, contextMenu } = utils;
  let { metadata } = contextMenu;
  if (Object.keys(metadata).length > 0) {
    metadata.className = metadata.className
      .split(" ")
      .filter((name) => !/^Mui/.test(name) && !/^css/.test(name));

    metadata.className = metadata.className.join(" ");
    const node =
      metadata.className.split(" ")[0] === "body"
        ? jsonTreeSearch({
            components: [...componentTree[metadata.className.split(" ")[0]]],
            className: metadata.className,
            id: metadata.id,
          })
        : jsonTreeSearch({
            components: [
              { ...componentTree[metadata.className.split(" ")[0]] },
            ],
            className: metadata.className,
            id: metadata.id,
          });
    const { styleConfig } = node;

    return {
      node,
      themeOpen,
      styleConfig,
    };
  }
  return {};
};

export default connect(mapStateToProps, { toggleThemePanel, setThemeValue })(
  ThemePanel
);

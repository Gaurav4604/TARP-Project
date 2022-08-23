import { Drawer, List, Stack } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { toggleComponentDrawer } from "../../redux/Utils/UtilsActions";

import config from "../../redux/Utils/componentConfig";
import ComponentCard from "./ComponentCard";

const ComponentPanel = ({
  componentDrawerOpen,
  toggleComponentDrawer,
  root,
}) => {
  const renderCards = () => {
    return Object.entries(config).map((group) => {
      if (root && group[0] === "root") {
        const components = group[1];
        return components.map((component) => (
          <ComponentCard
            {...component}
            key={component.caption}
            componentGroup={group[0]}
          />
        ));
      } else if (!root && group[0] === "blocks") {
        const components = group[1];
        return components.map((component) => (
          <ComponentCard
            {...component}
            key={component.caption}
            componentGroup={group[0]}
          />
        ));
      } else return undefined;
    });
  };

  return (
    <Drawer
      anchor={"left"}
      open={componentDrawerOpen}
      onClose={() => toggleComponentDrawer(false)}
    >
      <Stack
        id="component-panel"
        role="presentation"
        alignItems="center"
        justifyContent="center"
      >
        <List>{renderCards()}</List>
      </Stack>
    </Drawer>
  );
};

const mapStateToProps = ({ utils }) => {
  const { componentDrawerOpen, contextMenu } = utils;
  const { root } = contextMenu;
  return {
    componentDrawerOpen,
    root,
  };
};

export default connect(mapStateToProps, { toggleComponentDrawer })(
  ComponentPanel
);

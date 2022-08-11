import { Drawer, List, Stack } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { toggleComponentDrawer } from "../../redux/Utils/UtilsActions";

import config from "../../redux/Utils/componentConfig";
import ComponentCard from "./components/ComponentCard";

const renderCards = () => {
  return Object.entries(config).map((component) => {
    const componentGroup = component[0];
    const components = component[1];
    return [
      ...components.map((component) => (
        <ComponentCard
          {...component}
          key={component.caption}
          componentGroup={componentGroup}
        />
      )),
    ];
  });
};

const ComponentPanel = ({ componentDrawerOpen, toggleComponentDrawer }) => {
  return (
    <Drawer
      anchor={"left"}
      open={componentDrawerOpen}
      onClose={() => toggleComponentDrawer(false)}
    >
      <Stack
        sx={{ width: "10rem", height: "100%" }}
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
  const { componentDrawerOpen } = utils;
  return {
    componentDrawerOpen,
  };
};

export default connect(mapStateToProps, { toggleComponentDrawer })(
  ComponentPanel
);

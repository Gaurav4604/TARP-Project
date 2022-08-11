import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { toggleContextMenu } from "../../redux/Utils/UtilsActions";

const ComponentContextMenu = ({ contextMenu, toggleContextMenu }) => {
  console.log(contextMenu);
  return (
    <Menu
      open={contextMenu.open}
      onClose={() => toggleContextMenu(false)}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu.open
          ? { top: contextMenu.coordinates.y, left: contextMenu.coordinates.x }
          : undefined
      }
    >
      <MenuItem onClick={() => toggleContextMenu(false)}>Copy</MenuItem>
      <MenuItem onClick={() => toggleContextMenu(false)}>Print</MenuItem>
      <MenuItem onClick={() => toggleContextMenu(false)}>Highlight</MenuItem>
      <MenuItem onClick={() => toggleContextMenu(false)}>Email</MenuItem>
    </Menu>
  );
};

const mapStateToProps = ({ utils }) => {
  const { contextMenu } = utils;
  return {
    contextMenu,
  };
};

export default connect(mapStateToProps, { toggleContextMenu })(
  ComponentContextMenu
);

import { AddToQueue, Delete, Palette } from "@mui/icons-material";
import { createTheme, ListItemIcon, ListItemText, Menu, MenuItem, ThemeProvider } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { toggleComponentDrawer, toggleContextMenu, } from "../../redux/Utils/UtilsActions";


const menuTheme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          width: "10rem"
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "black"
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          textAlign: "end",
        },
        primary: {
          fontWeight: "700",
          color: "black"
        }
      }
    }
  }
})

const ComponentContextMenu = ({ contextMenu, toggleContextMenu, toggleComponentDrawer }) => {
  return (
    <ThemeProvider theme={menuTheme}>
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
        <MenuItem onClick={() => { toggleComponentDrawer(true); toggleContextMenu(false) }}>
          <ListItemIcon>
            <AddToQueue />
          </ListItemIcon>
          <ListItemText>Add</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => { toggleComponentDrawer(true); toggleContextMenu(false) }}>
          <ListItemIcon>
            <Palette />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => { toggleComponentDrawer(true); toggleContextMenu(false) }}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </ThemeProvider>

  );
};

const mapStateToProps = ({ utils }) => {
  const { contextMenu } = utils;
  return {
    contextMenu,
  };
};

export default connect(mapStateToProps, { toggleContextMenu, toggleComponentDrawer })(
  ComponentContextMenu
);

import types from "./types";

export const toggleThemePanel = (flag) => {
  return {
    type: types.TOGGLE_THEME_PANEL,
    payload: flag,
  };
};

export const toggleComponentDrawer = (flag, root = false) => {
  return (dispatch) => {
    if (root) {
      dispatch({
        type: types.TOGGLE_CONTEXT_MENU,
        payload: {
          root,
        },
      });
    }
    dispatch({
      type: types.TOGGLE_COMPONENT_DRAWER,
      payload: flag,
    });
  };
};

export const captureMousePos = (e) => {
  return {
    type: types.MOUSE_POS_CAPTURE,
    payload: {
      coordinates: {
        x: e.clientX,
        y: e.clientY,
      },
    },
  };
};

export const toggleContextMenu = (flag, root = false, metadata = {}) => {
  return (dispatch, getState) => {
    const { coordinates } = getState().utils;
    if (flag) {
      dispatch({
        type: types.TOGGLE_CONTEXT_MENU,
        payload: {
          open: flag,
          root,
          coordinates,
          metadata,
        },
      });
    } else {
      dispatch({
        type: types.TOGGLE_CONTEXT_MENU,
        payload: {
          open: flag,
        },
      });
    }
  };
};

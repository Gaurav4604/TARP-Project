import types from "./types";

export const toggleEditor = (flag) => {
  return {
    type: types.TOGGLE_EDITOR,
    payload: flag,
  };
};

export const toggleComponentDrawer = (flag) => {
  return {
    type: types.TOGGLE_COMPONENT_DRAWER,
    payload: flag,
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

export const toggleContextMenu = (flag, anchor = "", metadata = {}) => {
  return (dispatch, getState) => {
    const { coordinates } = getState().utils;
    if (flag) {
      dispatch({
        type: types.TOGGLE_CONTEXT_MENU,
        payload: {
          open: flag,
          componentContextAnchor: anchor,
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

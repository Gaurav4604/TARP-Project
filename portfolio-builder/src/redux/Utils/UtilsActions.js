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

export const toggleEditMode = (flag) => {
  return {
    type: types.TOGGLE_EDIT_MODE,
    payload: flag,
  };
};

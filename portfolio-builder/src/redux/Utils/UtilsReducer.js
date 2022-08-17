import types from "./types";

const initialState = {
  themeOpen: false,
  componentDrawerOpen: false,
  coordinates: {},
  contextMenu: {
    open: false,
    root: true,
    metadata: {},
    coordinates: {},
  },
};

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOUSE_POS_CAPTURE:
      return {
        ...state,
        ...action.payload,
      };
    case types.TOGGLE_THEME_PANEL:
      return {
        ...state,
        themeOpen: action.payload,
      };
    case types.TOGGLE_COMPONENT_DRAWER:
      return {
        ...state,
        componentDrawerOpen: action.payload,
      };
    case types.TOGGLE_CONTEXT_MENU:
      console.log(action.payload);
      return {
        ...state,
        contextMenu: {
          ...state.contextMenu,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default utilsReducer;

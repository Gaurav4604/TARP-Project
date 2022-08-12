import types from "./types";

const initialState = {
  editorOpen: false,
  componentDrawerOpen: false,
  coordinates: {},
  contextMenu: {
    open: false,
    componentContextAnchor: null,
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
    case types.TOGGLE_EDITOR:
      return {
        ...state,
        editorOpen: action.payload,
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

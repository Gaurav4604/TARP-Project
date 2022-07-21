import types from "./types";

const initialState = {
  editorOpen: false,
  componentDrawerOpen: false,
  editMode: false,
};

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case types.TOGGLE_EDIT_MODE:
      return {
        ...state,
        editMode: action.payload,
      };
    default:
      return state;
  }
};

export default utilsReducer;

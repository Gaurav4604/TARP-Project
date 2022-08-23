import types from "./types";

const initialState = {
  components: {
    MuiStack: {
      variants: [],
    },
    MuiTypography: {
      variants: [],
    },
  },
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMPONENT_THEME:
      return {
        components: {
          ...state.components,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default themeReducer;

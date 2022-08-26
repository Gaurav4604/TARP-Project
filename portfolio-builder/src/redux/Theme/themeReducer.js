import types from "./types";

const initialState = {
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
    },
  },
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

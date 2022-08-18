import types from "./types";

const initialState = {
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          cursor: "context-menu",
        },
      },
      variants: [
        {
          props: {
            className: "intro",
          },
          style: {
            width: "100%",
            height: "100vh",
            flexDirection: "row",
            backgroundColor: "blue",
          },
        },
        {
          props: {
            className: "intro frame",
          },
          style: {
            width: "80%",
            height: "80%",
            borderRadius: "1rem",
            backgroundColor: "purple",
          },
        },
        {
          props: {
            className: "body",
          },
          style: {
            width: "100%",
            height: "100vh",
            backgroundColor: "grey",
          },
        },
        {
          props: {
            className: "contact",
          },
          style: {
            width: "100%",
            height: "100vh",
            backgroundColor: "green",
          },
        },
      ],
    },
  },
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMPONENT_THEME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;

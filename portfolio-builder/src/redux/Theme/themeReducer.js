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
            className: "hero-section",
          },
          style: {
            width: "100%",
            height: "100vh",
            backgroundColor: "blue",
          },
        },
        {
          props: {
            className: "body-section",
          },
          style: {
            width: "100%",
            height: "100vh",
            backgroundColor: "red",
          },
        },
        {
          props: {
            className: "contact-section",
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
    default:
      return state;
  }
};

export default themeReducer;

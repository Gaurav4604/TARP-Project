function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

const initialState = {
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          cursor: "context-menu",
          backgroundColor: random_rgba(),
          minWidth: "10rem",
          minHeight: "10rem",
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
            backgroundColor: "red",
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
    default:
      return state;
  }
};

export default themeReducer;

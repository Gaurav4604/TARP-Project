const initialState = {
  components: {
    MuiStack: {
      variants: [
        {
          props: {
            className: "hero-section",
          },
          style: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "blue",
          },
        },
        {
          props: {
            className: "body-section",
          },
          style: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "red",
          },
        },
        {
          props: {
            className: "contact-section",
          },
          style: {
            width: "100vw",
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

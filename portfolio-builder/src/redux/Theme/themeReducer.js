const initialState = {
  components: {
    MuiStack: {
      variants: [
        {
          props: {
            className: "hero-section",
          },
          style: {
            display: "block",
            width: "100%",
            height: "500px",
            backgroundColor: "blue",
          },
        },
        {
          props: {
            className: "body-section",
          },
          style: {
            display: "block",
            width: "100%",
            height: "500px",
            backgroundColor: "red",
          },
        },
        {
          props: {
            className: "contact-section",
          },
          style: {
            display: "block",
            width: "100%",
            height: "500px",
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

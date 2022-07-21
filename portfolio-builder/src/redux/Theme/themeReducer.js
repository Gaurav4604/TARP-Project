const initialState = {
  components: {
    MuiStack: {
      variants: [
        {
          props: {
            id: "builder-page",
          },
          style: { flex: "1", backgroundColor: "red", height: "100vh" },
        },
        {
          props: {
            id: "editor-panel",
          },
          style: { flex: "0.3", backgroundColor: "blue", height: "100vh" },
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

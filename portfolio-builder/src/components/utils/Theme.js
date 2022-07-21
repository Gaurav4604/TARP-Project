import { createTheme } from "@mui/material";

const appTheme = createTheme({
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
});

export default appTheme;

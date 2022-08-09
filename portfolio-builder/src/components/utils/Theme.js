import { createTheme } from "@mui/material";

const appTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
    },
  },
  components: {
    MuiStack: {
      variants: [
        {
          props: {
            id: "application",
          },
          style: {
            width: "100vw",
            height: "100vh",
            overflow: "scroll",
            backgroundColor: "grey",
          },
        },
        {
          props: {
            id: "builder-page",
          },
          style: {
            width: "70vw",
          },
        },
        {
          props: {
            id: "editor-panel",
          },
          style: { flex: "0.3", height: "100vh", position: "absolute" },
        },
      ],
    },
  },
});

export default appTheme;

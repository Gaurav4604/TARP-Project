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
            backgroundColor: "grey",
          },
        },
        {
          props: {
            id: "builder-page",
          },
          style: { flex: "1", height: "100vh" },
        },
        {
          props: {
            id: "editor-panel",
          },
          style: { flex: "0.3", height: "100vh" },
        },
      ],
    },
  },
});

export default appTheme;

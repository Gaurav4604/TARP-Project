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
            backgroundColor: "white",
            cursor: "context-menu",
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
      ],
    },
  },
});

export default appTheme;

import { createTheme } from "@mui/material";

const appTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
    },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: {
            type: "color",
            id: "color-input",
          },
          style: {
            width: "18rem",
          },
        },
        {
          props: {
            type: "text",
            id: "text-input",
          },
          style: {
            width: "18rem",
          },
        },
      ],
    },
    MuiSlider: {
      variants: [
        {
          props: {
            id: "unit-slider",
          },
          style: {
            width: "18rem",
          },
        },
      ],
    },
    MuiStack: {
      variants: [
        {
          props: {
            id: "component-panel",
          },
          style: { width: "10rem", height: "100%" },
        },
        {
          props: {
            id: "theme-panel",
          },
          style: {
            width: "20rem",
            marginTop: "2rem",
          },
        },
        {
          props: {
            id: "application",
          },
          style: {
            width: "100vw",
            height: "100vh",
            overflow: "scroll",
            backgroundColor: "white",
          },
        },
        {
          props: {
            id: "builder-page",
          },
          style: {
            width: "100vw",
          },
        },
      ],
    },
  },
});

export default appTheme;

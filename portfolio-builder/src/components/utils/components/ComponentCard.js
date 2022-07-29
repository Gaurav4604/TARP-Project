import { AddCircleOutline } from "@mui/icons-material";
import {
  Card,
  createTheme,
  experimental_sx as sx,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

import { connect } from "react-redux";
import { addComponent } from "../../../redux/ComponentTree/ComponentTreeActions";

const cardTheme = createTheme({
  typography: {
    allVariants: {
      userSelect: "none",
      MozUserSelect: "none",
      WebkitUserSelect: "none",
      WebkitTouchCallout: "none",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: sx({
          width: "8rem",
          height: "8rem",
          marginBottom: "1rem",
          boxShadow: "none",
          position: "relative",
          transition: "all 0.2s ease",
          "&:active": {
            transform: "scale(0.9)",
          },
          "&:hover": {
            border: "0.1rem dashed black",
          },
          "&:hover #container": {
            opacity: 0,
            cursor: "pointer",
          },
          "&:hover #container-hover": {
            opacity: 1,
            cursor: "pointer",
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600",
          fontSize: "0.9rem",
          textAlign: "center",
        },
      },
    },
    MuiStack: {
      variants: [
        {
          props: {
            id: "container",
          },
          style: sx({
            width: "100%",
            height: "100%",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            opacity: 1,
          }),
        },
        {
          props: {
            id: "container-hover",
          },
          style: sx({
            width: "100%",
            height: "100%",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
          }),
        },
      ],
    },
  },
});

const ComponentCard = ({ icon, component, caption, addComponent }) => {
  const generateClassName = (caption) =>
    caption.toLowerCase().split(" ").join("-");
  return (
    <ThemeProvider theme={cardTheme}>
      <Card
        id={generateClassName(caption)}
        onClick={() =>
          addComponent({
            ...component,
            componentClassName: generateClassName(caption),
          })
        }
      >
        <Stack id="container">
          {React.createElement(icon)}
          <Typography>{caption}</Typography>
        </Stack>
        <Stack id="container-hover">
          <AddCircleOutline />
        </Stack>
      </Card>
    </ThemeProvider>
  );
};

export default connect(null, { addComponent })(ComponentCard);

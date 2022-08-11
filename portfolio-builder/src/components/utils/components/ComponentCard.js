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
  palette: {
    primary: {
      frames: "#A66CFF",
      molecules: "#9C9EFE",
      atoms: "#AFB4FF",
      main: "#fff",
    },
  },
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
          border: "0.1rem dashed white",
          "&:active": {
            transform: "scale(0.9)",
          },
          "&:hover": {
            border: "0.3rem dashed white",
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
      variants: [
        {
          props: {
            className: "frames",
          },
          style: sx({
            bgcolor: "primary.frames",
          }),
        },
        {
          props: { className: "molecules" },
          style: sx({
            bgcolor: "primary.molecules",
          }),
        },
        {
          props: { className: "atoms" },
          style: sx({
            bgcolor: "primary.atoms",
          }),
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
          color: "white",
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
            "& .MuiSvgIcon-root": sx({
              color: "white",
            }),
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
            "& .MuiSvgIcon-root": sx({
              color: "white",
            }),
          }),
        },
      ],
    },
  },
});

const ComponentCard = ({
  icon,
  component,
  caption,
  addComponent,
  componentGroup,
}) => {
  const generateId = (caption) => caption.toLowerCase().split(" ").join("-");
  return (
    <ThemeProvider theme={cardTheme}>
      <Card
        id={generateId(caption)}
        className={componentGroup}
        onClick={() =>
          addComponent({
            ...component,
            componentClassName: generateId(caption),
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

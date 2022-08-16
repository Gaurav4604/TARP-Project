import { Add } from "@mui/icons-material";
import { createTheme, Fab, ThemeProvider } from "@mui/material";

import React from "react";
import { connect } from "react-redux";
import { toggleComponentDrawer } from "../../redux/Utils/UtilsActions";

const theme = createTheme({
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          position: "absolute",
          right: "5rem",
          bottom: "2rem",
        },
      },
    },
  },
});

const AddFAB = ({ toggleComponentDrawer }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fab
        size="medium"
        aria-label="add"
        onClick={() => toggleComponentDrawer(true, true)}
      >
        <Add />
      </Fab>
    </ThemeProvider>
  );
};

export default connect(null, { toggleComponentDrawer })(AddFAB);

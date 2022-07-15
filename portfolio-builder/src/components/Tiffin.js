import { Paper, Stack } from "@mui/material";
import React from "react";

const Tiffin = () => {
  return (
    <Paper
      sx={{
        borderRadius: "1rem",
      }}
    >
      <Stack
        sx={{
          width: "10rem",
          height: "10rem",
          backgroundColor: "red",
          borderRadius: "1rem",
        }}
        id="i-am-id"
        onContextMenu={(e) => console.log(e)}
      />
    </Paper>
  );
};

export default Tiffin;

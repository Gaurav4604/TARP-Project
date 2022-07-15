import { Stack } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import Tiffin from "./components/Tiffin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Stack
    sx={{
      width: "100vw",
      height: "100vh",
    }}
    alignItems="center"
    justifyContent="center"
  >
    <Tiffin />
  </Stack>
);

import { Slider } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { toggleComponentDrawer } from "./redux/Utils/UtilsActions";

const Sandbox = ({ toggleComponentDrawer }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onContextMenu={(e) => {
        toggleComponentDrawer(true);
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Slider defaultValue={10} min={0} max={100} valueLabelDisplay={"auto"} />
    </div>
  );
};

export default connect(null, toggleComponentDrawer)(Sandbox);

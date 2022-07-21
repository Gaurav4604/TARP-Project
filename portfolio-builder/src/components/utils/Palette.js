import React from "react";
import { Drawer } from "@mui/material";

const Palette = ({ open, content }) => {
  return (
    <Drawer id="editor-panel" open={open} onClose={() => {}}>
      {content}
    </Drawer>
  );
};

export default Palette;

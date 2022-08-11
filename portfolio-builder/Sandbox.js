import React from "react";
import { connect } from "react-redux";
import ComponentPanel from "./src/components/utils/ComponentPanel";
import { toggleComponentDrawer } from "./src/redux/Utils/UtilsActions";

const Sandbox = ({ toggleComponentDrawer }) => {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      onContextMenu={(e) => {
        toggleComponentDrawer(true);
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <ComponentPanel />
    </div>
  );
};

export default connect(null, toggleComponentDrawer)(Sandbox);

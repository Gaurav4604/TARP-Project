import { Stack } from "@mui/material";
import React, { useRef } from "react";
import { connect } from "react-redux";

const CompositionStack = ({ id = "", children }) => {
  const ref = useRef(null);

  return (
    <Stack id={id} ref={ref}>
      {children}
    </Stack>
  );
};

export default connect(null, {})(CompositionStack);

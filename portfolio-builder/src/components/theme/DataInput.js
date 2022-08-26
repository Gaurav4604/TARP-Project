import { FormControlLabel, TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { addTreeNodeData } from "../../redux/ComponentTree/ComponentTreeActions";

const DataInput = ({ propName, addTreeNodeData, node = {} }) => {
  return (
    <FormControlLabel
      label={propName}
      labelPlacement={"top"}
      control={
        <TextField
          type="text"
          id="text-input"
          value={node.dataProps[propName] ? node.dataProps[propName] : ""}
          onChange={(e) => {
            e.preventDefault();
            let value = {};
            value[propName] = e.target.value;
            addTreeNodeData({
              value,
            });
          }}
        />
      }
    />
  );
};

export default connect(null, { addTreeNodeData })(DataInput);

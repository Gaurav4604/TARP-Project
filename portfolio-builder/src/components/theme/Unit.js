import { Slider } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { setThemeValue } from "../../redux/Theme/themeActions";

const Unit = ({
  step,
  min,
  max,
  id,
  property,
  unit,
  className,
  setThemeValue,
}) => {
  const [value, setValue] = useState(0);
  return (
    <Slider
      {...{ step, min, max }}
      marks
      value={value}
      onChange={(_, value) => {
        setValue(value);
        setThemeValue({
          id,
          className,
          value: {
            unit,
            property,
            value,
          },
        });
      }}
    />
  );
};

const mapStateToProps = ({ utils }) => {
  const { id, className } = utils.metadata;
  return {
    id,
    className,
  };
};

export default connect(mapStateToProps, { setThemeValue })(Unit);

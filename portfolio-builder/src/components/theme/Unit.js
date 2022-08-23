import { Slider } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { setThemeValue } from "../../redux/Theme/themeActions";

const Unit = ({
  node = {},
  step,
  min,
  max,
  id,
  value,
  property,
  unit,
  className,
  setThemeValue,
}) => {
  return (
    <Slider
      {...{ step, min, max }}
      marks
      value={value}
      onChange={(_, value) => {
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

const mapStateToProps = ({ theme }, props) => {
  const { components } = theme;
  const { id, className, componentType } = props.node;
  const { property } = props;
  const { variants } = components[componentType];

  const variantIndex = variants.findIndex(
    (variant) =>
      variant.props.id === id && variant.props.className === className
  );

  if (variantIndex !== -1) {
    if (Object.keys(variants[variantIndex].style).includes(property)) {
      return {
        id,
        className,
        value: parseInt(variants[variantIndex].style[property]),
      };
    }
  }
  return {
    id,
    className,
    value: 0,
  };
};

export default connect(mapStateToProps, { setThemeValue })(Unit);

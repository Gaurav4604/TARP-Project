import { FormControlLabel, TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { setThemeValue } from "../../redux/Theme/themeActions";

const ColorPicker = ({
  node = {},
  value,
  id,
  className,
  property,
  setThemeValue,
}) => {
  return (
    <FormControlLabel
      label={property}
      labelPlacement={"top"}
      control={
        <TextField
          type="color"
          id="color-input"
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setThemeValue({
              id,
              className,
              value: {
                unit: "",
                property,
                value: e.target.value,
              },
            });
          }}
        />
      }
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
        value: variants[variantIndex].style[property],
      };
    }
  }
  return {
    id,
    className,
    value: "#ffffff",
  };
};

export default connect(mapStateToProps, { setThemeValue })(ColorPicker);

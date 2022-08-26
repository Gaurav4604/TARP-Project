import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { setThemeValue } from "../../redux/Theme/themeActions";

const Flex = ({
  alignItems,
  justifyContent,
  flexDirection,
  node = {},
  id,
  value,
  className,
  setThemeValue,
}) => {
  return (
    <Stack justifyContent="flex-start">
      <FormControlLabel
        label="Flex"
        control={
          <Checkbox
            checked={value.flex}
            onChange={(e) => {
              setThemeValue({
                id,
                className,
                value: {
                  property: "display",
                  value: e.target.checked ? "flex" : "block",
                  unit: "",
                },
              });
            }}
          />
        }
      />
      <FormControlLabel
        label="Flex Direction"
        control={
          <Select
            onChange={(e) =>
              setThemeValue({
                id,
                className,
                value: {
                  property: "flexDirection",
                  value: e.target.value,
                  unit: "",
                },
              })
            }
          >
            {flexDirection.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        }
      />
      <FormControlLabel
        label="Align Items"
        control={
          <Select
            onChange={(e) =>
              setThemeValue({
                id,
                className,
                value: {
                  property: "alignItems",
                  value: e.target.value,
                  unit: "",
                },
              })
            }
          >
            {alignItems.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        }
      />
      <FormControlLabel
        label="Justify Content"
        control={
          <Select
            onChange={(e) =>
              setThemeValue({
                id,
                className,
                value: {
                  property: "justifyContent",
                  value: e.target.value,
                  unit: "",
                },
              })
            }
          >
            {justifyContent.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        }
      />
    </Stack>
  );
};

const mapStateToProps = ({ theme }, props) => {
  const { components } = theme;
  const { id, className, componentType } = props.node;
  const { variants } = components[componentType];

  const variantIndex = variants.findIndex(
    (variant) =>
      variant.props.id === id && variant.props.className === className
  );

  if (variantIndex !== -1) {
    if (Object.keys(variants[variantIndex].style).includes("display")) {
      return {
        id,
        className,
        value: {
          flex: variants[variantIndex].style["display"] === "flex",
        },
      };
    }
  }
  return {
    id,
    className,
    value: {
      flex: false,
    },
  };
};
export default connect(mapStateToProps, { setThemeValue })(Flex);

import { Stack, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setThemeValue } from "../../redux/Theme/themeActions";
import { toggleContextMenu } from "../../redux/Utils/UtilsActions";

const ImageFrame = ({
  className,
  id,
  src,
  stylesToSetOnMount = {},
  setThemeValue,
  ...props
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  useEffect(() => {
    for (let entry of Object.entries(stylesToSetOnMount)) {
      setThemeValue({
        className,
        id,
        value: {
          unit: "",
          property: entry[0],
          value: entry[1],
        },
      });
    }
  }, [className, id, setThemeValue, stylesToSetOnMount]);

  const findBorderRadius = (theme) => {
    let obj = theme.components.MuiStack.variants.filter(
      ({ props }) => props.id === id && props.className === className
    );

    if (obj.length > 0) {
      obj = obj[0];
      if (Object.keys(obj.style).includes("borderRadius")) {
        return obj.style.borderRadius;
      }
    }

    return "";
  };

  return (
    <Stack
      sx={{ overflow: "hidden" }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(
          toggleContextMenu(true, false, {
            id: e.currentTarget.id,
            className: e.currentTarget.className
              .split(" ")
              .slice(0, -1)
              .join(" "),
          })
        );
      }}
      className={className}
      id={id}
      {...props}
    >
      <img
        src={src}
        alt="display"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: findBorderRadius(theme),
        }}
      />
    </Stack>
  );
};

export default connect(null, { setThemeValue })(ImageFrame);

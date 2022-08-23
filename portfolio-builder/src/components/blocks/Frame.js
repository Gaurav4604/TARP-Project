import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setThemeValue } from "../../redux/Theme/themeActions";
import { toggleContextMenu } from "../../redux/Utils/UtilsActions";

const Frame = ({
  children,
  className,
  id,
  stylesToSetOnMount = {},
  setThemeValue,
  ...props
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    for (let entry of Object.entries(stylesToSetOnMount)) {
      console.log(entry);
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

  return (
    <Stack
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
      {children}
    </Stack>
  );
};

export default connect(null, { setThemeValue })(Frame);

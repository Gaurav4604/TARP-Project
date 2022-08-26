import { Stack } from "@mui/material";
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
      <video
        controls
        alt="display"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </Stack>
  );
};

export default connect(null, { setThemeValue })(ImageFrame);

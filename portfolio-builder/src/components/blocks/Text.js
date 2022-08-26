import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setThemeValue } from "../../redux/Theme/themeActions";
import { toggleContextMenu } from "../../redux/Utils/UtilsActions";
import { addTreeNodeData } from "../../redux/ComponentTree/ComponentTreeActions";

const Text = ({
  className,
  id,
  stylesToSetOnMount = {},
  setThemeValue,
  addTreeNodeData,
  toggleContextMenu,
  ...props
}) => {
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
    <Typography
      sx={{ fontFamily: "Poppins" }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();

        toggleContextMenu(true, false, {
          id: e.currentTarget.id,
          className: e.currentTarget.className
            .split(" ")
            .slice(0, -1)
            .join(" "),
        });

        // addTreeNodeData({
        //   value: {
        //     children: "Not Hello There",
        //   },
        // });
      }}
      className={className}
      id={id}
      {...props}
    />
  );
};

export default connect(null, {
  setThemeValue,
  addTreeNodeData,
  toggleContextMenu,
})(Text);

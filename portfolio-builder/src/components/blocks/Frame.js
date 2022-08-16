import { Stack } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleContextMenu } from "../../redux/Utils/UtilsActions";

const Frame = ({ children, className, id, ...props }) => {
  const dispatch = useDispatch();

  return (
    <Stack
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(
          e.currentTarget.id,
          e.currentTarget.className.split(" ").slice(0, -1).join(" ")
        );
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

export default Frame;

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
        dispatch(
          toggleContextMenu(true, "molecule", {
            id: e.currentTarget.id,
            className: e.currentTarget.className,
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

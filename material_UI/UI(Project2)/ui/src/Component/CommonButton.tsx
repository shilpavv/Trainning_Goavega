import { Button } from "@mui/material";
import React from "react";
export const CommonButton = ({
  children,
  color,
  disabled,
  size,
  sx,
  varient,
}: any) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      variant={varient}
    >
       {children}{" "}
    </Button>
  );
};

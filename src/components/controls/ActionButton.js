import React from "react";
import { Button } from "@mui/material";

export default function ActionButton(props) {
  const { colors, size, children, onClick } = props;
  const styles = {
    minWidth: 0,

    backgroundColor: colors.backgroundColor,
    color: colors.color,
    "&:hover": {
      backgroundColor: colors.hoverColor,
      color: colors.color,
    },
  };
  return (
    <Button sx={styles} onClick={onClick} size={size || "small"}>
      {children}
    </Button>
  );
}

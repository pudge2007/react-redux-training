import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const PendingButton = ({ children, isPending, color, ...rest }) => {
  return (
    <Button color={color} {...rest}>
      {children}
      {isPending && (
        <CircularProgress color={color} size={18} style={{ marginLeft: 15 }} />
      )}
    </Button>
  );
};

export default PendingButton;

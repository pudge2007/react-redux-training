import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ModalDialog = ({ children, isOpen, onClose, title, subtitle }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {subtitle && <DialogContentText>{subtitle}</DialogContentText>}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialog;

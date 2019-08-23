import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import { styles, icons } from "./styles";

const Notification = ({ id, type, message, onClose }) => {
  const classes = styles();
  const Icon = icons[type];

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={true}
        autoHideDuration={3000}
        
      >
        <SnackbarContent
          className={classes[type]}
          message={
            <span id="client-snackbar" className={classes.message}>
              <Icon className={clsx(classes.icon, classes.iconVariant)} />
              {message}
            </span>
          }
          action={[
            <IconButton key="close" color="inherit" onClick={() => onClose(id)}>
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]}
        />
      </Snackbar>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired,
  onClose: PropTypes.func
};

export default Notification;

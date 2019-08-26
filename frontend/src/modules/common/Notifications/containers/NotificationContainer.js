import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withSnackbar } from "notistack";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import * as actionCreators from "../actions";
import { getNotifications } from "../selectors";

class NotificationContainer extends Component {
  displayed = [];

  storeDisplayed = key => {
    this.displayed = [...this.displayed, key];
  };

  shouldComponentUpdate({ notifications: newSnacks = [] }) {
    if (!newSnacks.length) {
      this.displayed = [];
      return false;
    }

    const { notifications: currentSnacks, closeSnackbar } = this.props;

    let notExists = false;
    for (let i = 0; i < newSnacks.length; i += 1) {
      const newSnack = newSnacks[i];

      if (newSnack.dismissed) {
        closeSnackbar(newSnack.key);
      }

      if (notExists) continue;
      notExists =
        notExists ||
        !currentSnacks.filter(({ key }) => newSnack.key === key).length;
    }
    return notExists;
  }

  componentDidUpdate() {
    const { notifications, enqueueSnackbar, closeSnackbar } = this.props;
    const { removeNotification } = this.props.actions;

    notifications.forEach(({ key, message, options = {} }) => {
      // Do nothing if snackbar is already displayed
      if (this.displayed.includes(key)) return;
      // Display snackbar using notistack
      enqueueSnackbar(message, {
        ...options,
        onClose: () => removeNotification(key),
        action: () => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <CloseIcon style={{ fontSize: 20, color: "#fff" }} />
          </IconButton>
        )
      });
      // Keep track of snackbars that we've displayed
      this.storeDisplayed(key);
    });
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    notifications: getNotifications(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotificationContainer)
);

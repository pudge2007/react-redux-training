import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Auth from "../components/Auth";
import { AUTH_MODAL } from "../constants";
import { getIsAuthenticated, getUser } from "../selectors";
import { logout } from "../actions";
import { toggleModal } from "modules/common/ModalDialog/actions";

class AuthContainer extends Component {
  logout = () => {
    this.props.logout();
  };

  toggleModal = () => {
    this.props.toggleModal(AUTH_MODAL.modalName);
  };

  render() {
    return (
      <Auth
        {...this.props}
        toggleModal={this.toggleModal}
        logout={this.logout}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: getUser(state),
    isAuthenticated: getIsAuthenticated(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: bindActionCreators(toggleModal, dispatch),
    logout: bindActionCreators(logout, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);

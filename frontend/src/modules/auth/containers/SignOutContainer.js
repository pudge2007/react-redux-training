import React, { Component } from "react";
import { connect } from "react-redux";

import SignOutMenu from "../components/SignOutMenu";
import { bindActionCreators } from "redux";
import { signOutRequest } from "../actions";

class SignOutContainer extends Component {
  logout = () => {
    this.props.logout();
  };

  render() {
    return <SignOutMenu onLogout={this.logout} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: bindActionCreators(signOutRequest, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignOutContainer);

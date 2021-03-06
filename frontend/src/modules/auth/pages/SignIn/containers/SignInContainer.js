import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from "../actions";
import { getIsPending } from "modules/api/selectors";
import SignInForm from "../components/SignInForm";

class SignInContainer extends Component {
  onSubmit = formValues => {
    this.props.actions.signInRequest(formValues);
  };

  render() {
    const formProps = {
      form: "SIGN_IN_FORM",
      onSubmit: this.onSubmit,
      isPending: this.props.isPending
    };

    return <SignInForm {...formProps} />;
  }
}

const mapStateToProps = state => {
  return {
    isPending: getIsPending(state, actionCreators.signInRequest)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from "../actions";
import { getIsPending } from "modules/api/selectors";
import SignUpForm from "../components/SignUpForm";

class SignUpContainer extends Component {
  onSubmit = formValues => {
    this.props.actions.signUpRequest(formValues);
  };

  render() {
    const formProps = {
      form: "SIGN_UP_FORM",
      onSubmit: this.onSubmit,
      isPending: this.props.isPending
    };

    return <SignUpForm {...formProps} />;
  }
}

const mapStateToProps = state => {
  return {
    isPending: getIsPending(state, actionCreators.signUpRequest)
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
)(SignUpContainer);

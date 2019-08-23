import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import SignInModal from "../components/SignInModal";
import * as modalActionCreators from "modules/common/ModalDialog/actions";
import * as formActionCreators from "../actions";
import { SIGN_IN_MODAL } from "../constants";
import { getIsPending } from "modules/auth/selectors";

class SignInContainer extends Component {
  toggleModal = () => {
    this.props.modalActions.toggleModal(SIGN_IN_MODAL.modalName);
  };

  onSubmit = formValues => {
    this.props.formActions.signInRequest(formValues);
  };

  render() {
    const formProps = {
      form: "SIGN_IN_FORM",
      onCancel: this.toggleModal,
      onSubmit: this.onSubmit,
      isPending: this.props.isPending
    };

    return (
      <Fragment>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.toggleModal}
        >
          Войти
        </Button>
        <SignInModal modal={SIGN_IN_MODAL} form={formProps} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isPending: getIsPending(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formActions: bindActionCreators(formActionCreators, dispatch),
    modalActions: bindActionCreators(modalActionCreators, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);

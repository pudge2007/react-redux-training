import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ModalDialog from "../components";
import * as actionCreators from "../actions";
import { isOpen } from "../selectors";

class ModalDialogContainer extends Component {
  closeModal = () => {
    this.props.actions.toggleModal(this.props.modalName);
  };

  render() {
    return <ModalDialog onClose={this.closeModal} {...this.props} />;
  }
}

const mapStateToProps = (state, { modalName }) => {
  return {
    isOpen: isOpen(state, modalName)
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
)(ModalDialogContainer);

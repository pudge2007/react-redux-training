import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Rating from "@material-ui/lab/Rating";

import * as actionCreators from "./actions";
import * as modalActionCreators from "modules/common/ModalDialog/actions";
import { getIsAuthenticated, getUserId } from "modules/auth/selectors";
import { SIGN_IN_MODAL } from "modules/auth/pages/SignIn/constants";
import { getIsPending } from "modules/api/selectors";
import { getFilmId, getRating } from "modules/films/selectors";

class RaitingContainer extends Component {
  onChange = (event, value) => {
    const {
      isAuthenticated,
      modalActions,
      actions,
      filmId,
      userId
    } = this.props;

    if (!isAuthenticated) {
      modalActions.toggleModal(SIGN_IN_MODAL.modalName);
    } else {
      actions.addRatingRequest({
        film_id: filmId,
        user_id: userId,
        rating: value * 2
      });
    }
  };

  render() {
    const { isPending, rating } = this.props;
    return (
      <Rating
        disabled={isPending}
        value={rating / 2}
        onChange={this.onChange}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    rating: getRating(state),
    filmId: getFilmId(state),
    userId: getUserId(state),
    isAuthenticated: getIsAuthenticated(state),
    isPending: getIsPending(state, actionCreators.addRatingRequest)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
    modalActions: bindActionCreators(modalActionCreators, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RaitingContainer);

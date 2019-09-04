import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions";
import { getIsAuthenticated, getUserId } from "modules/auth/selectors";
import { getIsPending } from "modules/api/selectors";
import { getFilmId, getComments } from "../../../pages/FilmPage/selectors";
import { COMMENT_FORM } from "../constants";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";
import Layout from "modules/common/Layout";

class CommentsContainer extends Component {
  componentDidMount() {
    const { filmId, actions } = this.props;
    actions.getCommentsRequest(filmId);
  }

  onSubmit = formValues => {
    const { actions, filmId, userId } = this.props;

    actions.addCommentRequest({
      film_id: filmId,
      user_id: userId,
      ...formValues
    });
  };

  render() {
    const {
      isAuthenticated,
      isPending,
      isAddCommentPending,
      comments
    } = this.props;

    const formProps = {
      form: COMMENT_FORM,
      onSubmit: this.onSubmit,
      isPending: isAddCommentPending,
      isAuthenticated
    };

    return (
      <Layout isPending={isPending}>
        <CommentsList comments={comments}>
          <CommentForm {...formProps} />
        </CommentsList>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: getComments(state),
    filmId: getFilmId(state),
    userId: getUserId(state),
    isAuthenticated: getIsAuthenticated(state),
    isAddCommentPending: getIsPending(state, actionCreators.addCommentRequest),
    isPending: getIsPending(state, actionCreators.getCommentsRequest)
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
)(CommentsContainer);

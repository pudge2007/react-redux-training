import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Film from "../components/Film";
import * as actionCreators from "../actions";
import { removeFilmState } from "../../../actions";
import { getFilm } from "../../../selectors";
import { getIsPending } from "modules/api/selectors";
import Layout from "modules/common/Layout";

class FilmPageContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.actions.getFilmRequest(id);
  }

  componentWillUnmount() {
    this.props.removeFilmState();
  }

  render() {
    const { film, isPending } = this.props;
    return (
      <Layout isPending={isPending}>{film && <Film film={film} />}</Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    film: getFilm(state),
    isPending: getIsPending(state, actionCreators.getFilmRequest)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
    removeFilmState: bindActionCreators(removeFilmState, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmPageContainer);

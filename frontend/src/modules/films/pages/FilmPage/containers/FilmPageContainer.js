import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Film from "../components/Film";
import * as actionCreators from "../actions";
import { getFilm } from "../../../selectors";
import { getIsPending } from "modules/api/selectors";
import Layout from "modules/common/Layout";

class FilmPageContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.actions.getFilmByIdRequest(id);
  }

  componentWillUnmount() {
    this.props.actions.removeFilmState();
  }

  render() {
    const { film, isPending } = this.props;
    return (
      <Layout isPending={isPending}>
        {film && <Film film={film} />}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    film: getFilm(state),
    isPending: getIsPending(state, actionCreators.getFilmByIdRequest)
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
)(FilmPageContainer);

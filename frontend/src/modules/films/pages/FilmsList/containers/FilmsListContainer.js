import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FilmsList from "../components/FilmsList";
import * as actionCreators from "../actions";
import { getFilms } from "../../../selectors";
import { getIsPending } from "modules/api/selectors";

class FilmsListContainer extends Component {
  componentDidMount() {
    if (!this.props.films.length) {
      this.props.getFilms();
    }
  }

  render() {
    const props = {
      films: this.props.films,
      isPending: this.props.isPending
    };
    return <FilmsList {...props} />;
  }
}

const mapStateToProps = state => {
  return {
    films: getFilms(state),
    isPending: getIsPending(state, actionCreators.getFilmsRequest)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilms: bindActionCreators(actionCreators.getFilmsRequest, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsListContainer);

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LinearProgress from "@material-ui/core/LinearProgress";

import Film from "../components/Film";
import * as actionCreators from "../actions";
import { getFilm, getFilmId } from "../../../selectors";
import { getIsPending } from "modules/api/selectors";

class FilmPageContainer extends Component {
  onRatingChange = (event, value) => {
    this.props.actions.setFilmRatingRequest({
      film_id: this.props.filmId,
      rating: value
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.actions.getFilmByIdRequest(id);
  }

  componentWillUnmount() {
    this.props.actions.removeFilmState();
  }

  render() {
    const { film, isPending, isPendingRating } = this.props;
    return (
      <Fragment>
        {((!film && isPending) || isPendingRating) && (
          <LinearProgress color="secondary" variant="query" />
        )}
        {film && !isPending ? (
          <Film {...this.props} onRatingChange={this.onRatingChange} />
        ) : (
          <h1>Ничего не найдено</h1>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    film: getFilm(state),
    filmId: getFilmId(state),
    isPending: getIsPending(state, actionCreators.getFilmByIdRequest),
    isPendingRating: getIsPending(state, actionCreators.setFilmRatingRequest)
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

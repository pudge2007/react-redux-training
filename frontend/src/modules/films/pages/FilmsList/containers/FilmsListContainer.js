import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FilmListHeader from "../components/FilmListHeader";
import FilmsList from "../components/FilmsList";
import * as actionCreators from "../actions";
import {
  getFilms,
  getTotalCount,
  getCurrentPage,
  getSearchText,
  getSortDirection
} from "../selectors";
import { getIsPending } from "modules/api/selectors";

class FilmsListContainer extends Component {
  loadFilms = () => {
    const { actions, page, sort, searchText } = this.props;
    actions.getFilmsRequest({ page, sort, searchText });
  };

  componentDidMount() {
    this.loadFilms();
  }

  componentWillUnmount() {
    this.props.actions.resetFilmsState();
  }

  render() {
    const { films, total, isPending } = this.props;
    return (
      <Fragment>
        <FilmListHeader event={this.loadFilms} />
        <FilmsList
          films={films}
          total={total}
          isPending={isPending}
          onScroll={this.loadFilms}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    films: getFilms(state),
    total: getTotalCount(state),
    page: getCurrentPage(state),
    searchText: getSearchText(state),
    sort: getSortDirection(state),
    isPending: getIsPending(state, actionCreators.getFilmsRequest)
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
)(FilmsListContainer);

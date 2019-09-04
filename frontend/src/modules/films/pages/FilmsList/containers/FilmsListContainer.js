import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { debounce } from "lodash";

import FilmsList from "../components/FilmsList";
import * as actionCreators from "../actions";
import {
  getFilms,
  getTotalCount,
  getCurrentPage,
  getSearchText
} from "../selectors";
import { getIsPending } from "modules/api/selectors";
import Search from "../components/Search";

class FilmsListContainer extends Component {
  onChange = e => {
    const { value } = e.target;
    this.props.actions.setSearchText(value);
    this.searchFilms(value);
  };

  searchFilms = debounce(() => {
    this.props.actions.resetFilmsState();
    this.loadFilms();
  }, 500);

  loadFilms = () => {
    const { actions, page, searchText } = this.props;
    actions.getFilmsRequest({ page, searchText });
  };

  componentDidMount() {
    this.loadFilms();
  }

  componentWillUnmount() {
    this.props.actions.resetFilmsState();
  }

  render() {
    const { films, total, isPending, searchText } = this.props;
    return (
      <Fragment>
        <Search onChange={this.onChange} value={searchText} />
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

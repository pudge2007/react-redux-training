import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { debounce } from "lodash";

import Layout from "modules/common/Layout";
import FilmsList from "../components/FilmsList";
import * as actionCreators from "../actions";
import { getFilms, getSearchText } from "../../../selectors";
import { getIsPending } from "modules/api/selectors";
import Search from "../components/Search";

class FilmsListContainer extends Component {
  onChange = e => {
    const { value } = e.target;
    this.props.actions.setSearchText(value);
    this.searchFilms(value);
  };

  searchFilms = debounce(value => {
    this.props.actions.getFilmsRequest(value);
  }, 500);

  componentDidMount() {
    const { actions, searchText } = this.props;
    actions.getFilmsRequest(searchText);
  }

  render() {
    const { films, isPending, searchText } = this.props;
    return (
      <Fragment>
        <Search onChange={this.onChange} value={searchText} />
        <Layout isPending={isPending}>
          <FilmsList films={films} />
        </Layout>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    films: getFilms(state),
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

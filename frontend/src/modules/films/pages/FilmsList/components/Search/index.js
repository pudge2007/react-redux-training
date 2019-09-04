import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { debounce } from "lodash";
import TextField from "@material-ui/core/TextField";

import * as actionCreators from "../../actions";
import { getSearchText } from "../../selectors";

class Search extends Component {
  onChange = e => {
    const { value } = e.target;
    this.props.actions.setSearchText(value);
    this.search();
  };

  search = debounce(() => {
    const { actions, onSearch } = this.props;
    actions.resetFilmsState();
    onSearch();
  }, 500);

  render() {
    const { searchText } = this.props;
    return (
      <TextField
        className="w-100"
        label="Поиск фильма"
        value={searchText}
        onChange={this.onChange}
        margin="dense"
        variant="outlined"
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    searchText: getSearchText(state)
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
)(Search);

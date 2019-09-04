import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { debounce } from "lodash";
import SortIcon from "@material-ui/icons/Sort";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import * as actionCreators from "../../actions";
import { getSortDirection } from "../../selectors";
import styles from "./styles";

class Sort extends Component {
  onChange = () => {
    const { sort, actions } = this.props;
    const nextDirection = sort === "DESC" ? "ASC" : "DESC";
    actions.setSortDirection(nextDirection);
    this.sort();
  };

  sort = debounce(() => {
    const { actions, onSort } = this.props;
    actions.resetFilmsState();
    onSort();
  }, 200);

  render() {
    const { classes, sort } = this.props;
    return (
      <Tooltip className="ml-3" title="Сортировать по рейтингу">
        <SortIcon
          onClick={this.onChange}
          className={classNames([
            classes.icon,
            sort === "ASC" ? classes.asc : null
          ])}
        />
      </Tooltip>
    );
  }
}

const mapStateToProps = state => {
  return {
    sort: getSortDirection(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Sort);

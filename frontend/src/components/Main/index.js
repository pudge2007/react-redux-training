import React from "react";
import { Switch, Route } from "react-router";
import { withStyles } from "@material-ui/core/styles";

import PrivateRoute from "modules/common/PrivateRoute";
import FilmsList from "modules/films/pages/FilmsList";
import FilmPage from "modules/films/pages/FilmPage";
import UserAccount from "modules/userAccount";
import Categories from "modules/categories";
import styles from "./styles";

const Main = ({ classes }) => {
  return (
    <div className={classes.mainBox}>
      <div className="container h-100">
        <Switch>
          <Route exact path="/" component={FilmsList} />
          <Route path="/film/:id" component={FilmPage} />
          <Route path="/categories" component={Categories} />
          <PrivateRoute path="/account" component={UserAccount} />
        </Switch>
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);

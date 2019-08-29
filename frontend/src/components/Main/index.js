import React from "react";
import { Switch, Route } from "react-router";

import PrivateRoute from "modules/common/PrivateRoute";
import FilmsList from "modules/films/pages/FilmsList";
import FilmPage from "modules/films/pages/FilmPage";
import UserAccount from "modules/userAccount";
import Categories from "modules/categories";
import Ratings from "modules/ratings";
import { styles } from "./styles";

const Main = () => {
  return (
    <div style={styles.mainBox}>
      <div className="container">
        <Switch>
          <Route exact path="/" component={FilmsList} />
          <Route path="/film/:id" component={FilmPage} />
          <Route path="/categories" component={Categories} />
          <Route path="/ratings" component={Ratings} />
          <PrivateRoute path="/account" component={UserAccount} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;

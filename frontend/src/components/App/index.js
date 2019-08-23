import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import { SnackbarProvider } from "notistack";
import { configureStore, history } from "store/configureStore";
import PrivateRoute from "modules/common/PrivateRoute";
import Notifications from "modules/common/Notifications";
import Header from "modules/common/Header";
import FilmsList from "modules/films";
import UserAccount from "modules/userAccount";
import Categories from "modules/categories";
import Ratings from "modules/ratings";

export const store = configureStore();

const App = () => {
  const SnackbarProviderOptions = {
    maxSnack: 3,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    }
  };

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <SnackbarProvider {...SnackbarProviderOptions}>
          <div className="container">
            <Notifications />

            <Header />

            <Switch>
              <Route exact path="/" component={FilmsList} />
              <Route path="/categories" component={Categories} />
              <Route path="/ratings" component={Ratings} />
              <PrivateRoute path="/account" component={UserAccount} />
            </Switch>
          </div>
        </SnackbarProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;

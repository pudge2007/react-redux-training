import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";

import { configureStore, history } from "store/configureStore";
import Notifications from "modules/common/Notifications";
import Header from "modules/common/Header";
import Main from "../Main";

export const store = configureStore();
let persistor = persistStore(store);

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
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <SnackbarProvider {...SnackbarProviderOptions}>
            <Notifications />
            <Header />
            <Main />
          </SnackbarProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;

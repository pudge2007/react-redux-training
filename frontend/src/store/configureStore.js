import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import rootReducer from "../rootReducer";
import rootSaga from "../rootSaga";

export const history = createBrowserHistory();

const router = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(sagaMiddleware, router))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

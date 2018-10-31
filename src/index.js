import React from "react";
import {render} from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import Root from './Root';
import reducer from "./reducers";
import saga from "./sagas";
import * as serviceWorker from "./serviceWorker";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ realtime: true });
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

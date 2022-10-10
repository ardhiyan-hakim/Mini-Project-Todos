import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

import createSagaMiddleware from "redux-saga";
import { watchGetTodos } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchGetTodos);

export default store;

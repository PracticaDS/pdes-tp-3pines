import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import acciones from './reducers/acciones';
import fabrica from "./reducers/fabrica";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
  fabrica,
  acciones
});

const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store

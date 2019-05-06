import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import acciones from './reducers/acciones';
import maquinas from './reducers/maquinas';
import fabrica from "./reducers/fabrica";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
  fabrica,
  acciones,
  maquinas,
});

const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store

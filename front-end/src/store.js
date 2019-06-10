import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import acciones from './reducers/acciones';
import fabrica from './reducers/fabrica';
import {composeWithDevTools} from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const reducer = (history) => combineReducers({
  router: connectRouter(history),
  fabrica,
  acciones
});

const store = createStore(
  reducer(history), 
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
);

export default store

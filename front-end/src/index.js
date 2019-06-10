import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Provider from 'react-redux/es/components/Provider';
import './index.css';
import App from './components/App.js';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Route, Switch, Redirect } from 'react-router-dom'
import LoginContainer from './components/Login/LoginContainer';

const Root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact path="/" to={'login'}/>
        <Route path="/login" component={LoginContainer} />
        <Route path="/fabrica" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

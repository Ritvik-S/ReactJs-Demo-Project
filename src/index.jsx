import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import FirstAssign from './components/firstAssign/firstAssign';
import id from './components/firstAssign/ID';

const history = createBrowserHistory();
const Root = () => (
  <BrowserRouter history={history}>
    <Switch>

      <Route
        exact
        path="/home"
        component={FirstAssign}
      />

      <Route
        path="/home/:id"
        component={id}
      />

      <Redirect
        from="/"
        to="/home"
      />

    </Switch>
  </BrowserRouter>
);

render(<Root />, document.querySelector('.root'));

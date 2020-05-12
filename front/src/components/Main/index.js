import React from 'react';
import { Router, Route } from 'react-router';
import HomePage from '../HomePage';
import PageNotFound from '../PageNotFound';
import Registration from '../Registration';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/register" component={Registration} />
    <Route path="*" component={PageNotFound} />
  </Router>
);

export default Routes;

/*Main React Dependencies*/
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/* Import Components */
import Main from '../components/Main';
import Enter from '../components/Enter/Enter';
import Landing from '../components/Landing/Landing';
// import Profile from '../components/Profile/Profile';


let routes = (
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Enter} />
        <Route path="Landing" component={Landing} />
      </Route>
  </Router>
);

export default routes;

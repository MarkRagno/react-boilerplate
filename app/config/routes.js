/*Main React Dependencies*/
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

/* Import Components */
import Main from '../components/Main'
import Enter from '../components/Enter/Enter'
import Landing from '../components/Landing/Landing'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'


// import Profile from '../components/Profile/Profile';


let routes = (
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Enter} />
        <Route path="Login" component={Login} />
        <Route path="Register" component={Register} />
        <Route path="Landing" component={Landing} />
      </Route>
  </Router>
);

export default routes;

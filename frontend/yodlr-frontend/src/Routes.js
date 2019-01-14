import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import SignUp from './SignUp';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/sign-up" render={() => <SignUp />} />
        <Route exact path="/admin" render={() => <Admin />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;

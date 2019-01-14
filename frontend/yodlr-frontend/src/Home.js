import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">
        <h1>Welcome to Yodler!</h1>
        <div>
          <NavLink to="/sign-up">
            <Button className="linkButton" color="primary">
              Sign-up
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;

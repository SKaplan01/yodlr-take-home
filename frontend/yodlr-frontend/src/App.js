import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from './NavBar';
// import YodlrApi from './YodlrApi';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);

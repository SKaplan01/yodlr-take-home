import React, { Component } from 'react';
import UserList from './UserList';
import YodlrApi from './YodlrApi';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: null,
      error: false
    };
  }

  async componentDidMount() {
    try {
      let users = await YodlrApi.getUsers();
      this.setState({ users: users, isLoading: false });
    } catch (err) {
      console.log(err);
      this.setState({
        users: null,
        isLoading: false,
        error: err
      });
    }
  }

  render() {
    return (
      <div id="admin">
        <h4>Yodlr Admin Page</h4>
        {this.state.isLoading ? (
          'loading...'
        ) : (
          <UserList users={this.state.users} />
        )}
        <div>{this.state.error ? `${this.state.error}` : null}</div>
      </div>
    );
  }
}

export default Admin;

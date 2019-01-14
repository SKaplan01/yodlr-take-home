import React, { Component } from 'react';
import { Table } from 'reactstrap';

class UserList extends Component {
  render() {
    let userTable = this.props.users.map(user => {
      return (
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
        </tr>
      );
    });
    return (
      <div id="userListContainer">
        <Table>
          <thead>
            <tr>
              <th>ID #</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{userTable}</tbody>
        </Table>
      </div>
    );
  }
}

export default UserList;

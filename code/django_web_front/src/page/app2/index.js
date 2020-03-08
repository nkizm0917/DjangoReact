import React, { Component } from 'react';
import axios from 'axios';

class UserList extends React.Component {
  renderRow() {
    const listItems = (
      <tr key={this.props.users.id}>
        <td>{this.props.users.id}</td>
        <td>{this.props.users.name}</td>
        <td>{this.props.users.email}</td>
        <td>{this.props.users.message}</td>
        <td>{this.props.users.created_at}</td>
      </tr>
    );
    return(
      listItems
    );
  }
  render() {
    return (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRow()}
        </tbody>
      </table>
    );
  }
}

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usersLength: 0,
      name: "",
      email: "",
      message: "",
    };
  }

  componentDidMount() {
    axios.get('http://192.168.99.100:8000/api/profile/1/?format=json')
    .then(response => {
      this.setState({
        // users: response.data.reverse(),
        users: response.data,
        usersLength: response.data.length,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="columns is-multiline">
        <div className="column is-6">
          <div className="notification">
            This is my react-django app.
          </div>
        </div>
        <div className="column is-12" id="user-table">
          <p>There are {this.state.usersLength} users.</p>
          <UserList
            users={this.state.users}
          />
        </div>
      </div>
    );
  }
}

export default App2;

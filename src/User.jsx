import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    console.log("users constructor");
  }

  componentDidMount() {
    console.log("user's componentDidMount is called");
  }

  componentWillUnmount() {
    console.log("user's component un-mounted");
  }

  render() {
    console.log("users render");
    return this.props.users.map((el) => (
      <div key={el.id} className="card">
        <p className="is-size-5 my-2 has-text-weight-light">
          Username: {el.username}
        </p>
        <p className="is-size-5 my-2 has-text-weight-light">
          email: {el.email}
        </p>
        <p className="is-size-5 my-2 has-text-weight-light">
          phone: {el.phone}
        </p>
        <button
          className="button is-danger is-small"
          id={el.id}
          onClick={this.props.handleClick}
        >
          delete user
        </button>
      </div>
    ));
  }
}

export default User;

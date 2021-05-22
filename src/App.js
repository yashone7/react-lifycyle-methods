import React, { Component } from "react";
import User from "./User";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    console.log("app constructor is called");

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("app levl componentDidMount is called");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ ...this.state, users: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users.length !== this.state.users.length) {
      console.log("length changed");
    }
  }

  handleClick(e) {
    // console.log(e.target.id);
    const filteredUser = this.state.users.filter(
      (el) => el.id !== parseInt(e.target.id)
    );
    this.setState({ ...this.state, users: filteredUser });
  }

  render() {
    console.log("app lvel render method is called");
    return (
      <div>
        {this.state.users.length > 0 && (
          <User users={this.state.users} handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default App;

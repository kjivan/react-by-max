import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import "./App.css";

class App extends Component {
  state = {
    username: ["Alex", "Sarah", "Bob"],
  };

  updateUsernameHandler = (index, name) => {
    this.setState({
      username: [
        ...this.state.username.slice(0, index),
        name,
        ...this.state.username.slice(index + 1),
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>UserName Example</h1>
        <UserInput
          username={this.state.username[0]}
          changeHandler={this.updateUsernameHandler.bind(this, 0)}
        />
        <UserOutput username={this.state.username[0]} />

        <UserInput
          username={this.state.username[1]}
          changeHandler={this.updateUsernameHandler.bind(this, 1)}
        />
        <UserOutput username={this.state.username[1]} />

        <UserInput
          username={this.state.username[2]}
          changeHandler={this.updateUsernameHandler.bind(this, 2)}
        />
        <UserOutput username={this.state.username[2]} />
      </div>
    );
  }
}

export default App;

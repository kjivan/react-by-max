import React, { Component } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import "./App.css";

class App extends Component {
  state = {
    word: "",
    length: 0,
  };

  changeHandler = ({ target: { value } }) => {
    this.setState({ word: value, length: value.length });
  };

  removeChar = (index) => {
    let word = this.state.word;
    word = word.slice(0, index) + word.slice(index + 1);
    this.setState({ word: word, length: word.length });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.word}
        />
        <p>The text length is {this.state.length}</p>
        <Validation length={this.state.length}></Validation>
        {this.state.word.split("").map((char, index) => (
          <Char
            charIndex={index}
            char={char}
            removeChar={this.removeChar}
            key={index}
          ></Char>
        ))}
      </div>
    );
  }
}

export default App;

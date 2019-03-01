import React, { Component } from 'react';
import './App.css';
import { Board } from './game-board';

class App extends Component {
  sanitizeInput(input, dimension) {
    let output;
    output = parseInt(input);
    if (Number.isNaN(output)) {
      return {
        valid: false,
        msg: `${input} not valid. 
        Please enter a valid integer for ${dimension}`
      };
    } else if (output < 0) {
      return {
        valid: false,
        msg: `${input} not valid. 
          Please enter a positive integer for ${dimension}`
      };
    } else {
      return {
        valid: true,
        output
      };
    }

  }
  render() {
    let width = this.sanitizeInput(
      prompt("Please enter board width"),
      'width'
    );
    while (!width.valid) {
      width = this.sanitizeInput(prompt(width.msg), 'width');
    }

    let height = this.sanitizeInput(
      prompt("Please enter board height"),
      'height'
    );
    while (!height.valid) {
      height = this.sanitizeInput(prompt(height.msg), 'height');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board width={width.output} height={height.output} />
        </div>
      </div>
    );
  }
}

export default App;

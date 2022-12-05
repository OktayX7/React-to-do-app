import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      number: 0,
    };
  }
  addOne() {
    console.log("addOne");
    this.setState((prevState) => {
      return {
        number: prevState.number + 1,
      };
    });
  }
  minusOne() {
    console.log("minusOne");
    this.setState((prevState) => {
      return {
        number: prevState.number - 1,
      };
    });
  }
  reset() {
    console.log("reset");
    this.setState({
      number: 0,
    });
  }
  render() {
    return (
      <div>
        <h1>Number:{this.state.number} </h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;

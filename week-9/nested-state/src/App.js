import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.state = {
      counter: {
        times: 0
      }
    };
  }

  increment() {
    // This will update the object in state, so DO NOT do this.
    // this.state.counter++;
    // this.setState({ counter: this.state.counter });

    // The proper way to do it is to copy the object with Object.assign.
    let copy = Object.assign({}, this.state.counter);
    copy.times++;

    this.setState({
      counter: copy
    });
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.counter.times}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;

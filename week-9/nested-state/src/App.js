import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.state = {
      counter: {
        times: 0
      },
      contacts: [{ name: "rune" }]
    };
  }

  // This shows how to update a nested object key.
  increment() {
    let copy = Object.assign({}, this.state.counter);
    copy.times++;

    this.setState({
      counter: copy
    });
  }

  // This shows how to update an object key in an array
  // This function is currently not being used in the code.
  updateFirstPerson() {

    // Copy array
    let arrCopy = this.state.contacts.slice();

    // Copy object you want to change
    let personCopy = Object.assign({}, arrCopy[0]);

    // Update person
    personCopy.name = "Another";

    // Put new updated person back in array copy
    arrCopy[0] = personCopy;

    // Update state
    this.setState({
      contacts: arrCopy
    })
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

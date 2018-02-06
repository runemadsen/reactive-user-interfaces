import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.buttonWasClicked = this.buttonWasClicked.bind(this);
    this.state = {
      count: 0
    };
  }

  buttonWasClicked() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.buttonWasClicked} />
        <Counter count={this.state.count} />
      </div>
    );
  }
}

export default App;

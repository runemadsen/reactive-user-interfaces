import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter initialCount={10} />
      </div>
    );
  }
}

export default App;

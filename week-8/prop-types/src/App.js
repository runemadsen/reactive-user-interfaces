import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button size="small">Small Button</Button>
        <Button>Normal Button</Button>
        <Button size="large">Large Button</Button>
        <Button variant="alternative" size="small">
          Alternative Small Button
        </Button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import HelloFunction from './HelloFunction';
import HelloClass from './HelloClass';
import HelloContainer from './HelloContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HelloFunction name="Rune" />
        <HelloFunction name="Roopa" />
        <HelloClass name="Rune" />
        <HelloClass name="Roopa" />
        <HelloContainer name="Rune" />
      </div>
    );
  }
}

export default App;

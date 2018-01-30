import React, { Component } from 'react';
import './App.css';
import HelloFunction from './HelloFunction';
import HelloClass from './HelloClass';
import HelloContainer from './HelloContainer';
import ParentComponent from './ParentComponent';

class App extends Component {
  render() {
    return (
      <div>
        <HelloFunction name="Rune" />
        <HelloFunction name="Roopa" />
        <HelloClass name="Rune" />
        <HelloClass name="Roopa" />
        <HelloContainer name="Rune" />
        <ParentComponent>
          <p>I am a child! I could be another component too!</p>
        </ParentComponent>
      </div>
    );
  }
}

export default App;

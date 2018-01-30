import React, { Component } from 'react';
import HelloClass from './HelloClass';
import './HelloContainer.css';

class HelloContainer extends Component {
  render() {
    return (
      <div className="container">
        <p>I am a container!</p>
        <HelloClass name={this.props.name} />
      </div>
    );
  }
}

export default HelloContainer;

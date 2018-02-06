import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">You have clicked {this.props.count} times.</div>
    );
  }
}

export default Counter;

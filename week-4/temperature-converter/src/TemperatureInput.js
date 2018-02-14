import React, { Component } from 'react';
import './App.css';

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(this.props.scale, parseFloat(e.target.value));
  }

  render() {
    return (
      <div className="TemperatureInput">
        <h3>Enter temperature in {this.props.scale}</h3>
        <input onChange={this.onChange} value={this.props.temperature} />
      </div>
    );
  }
}

export default TemperatureInput;

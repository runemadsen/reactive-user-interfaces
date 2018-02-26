import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="Input">
        <label>{this.props.label}</label>
        <input onChange={this.onChange} type="text" />
      </div>
    );
  }
}

export default Input;

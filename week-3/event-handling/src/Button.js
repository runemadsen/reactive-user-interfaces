import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="Button">
        Click me
      </button>
    );
  }
}

export default Button;

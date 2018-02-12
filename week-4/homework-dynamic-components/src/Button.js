import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick(this.props.label);
  }
  render() {
    const classes = this.props.active ? 'active' : 'inactive';
    return (
      <button className={'Button ' + classes} onClick={this.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;

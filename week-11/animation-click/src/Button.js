import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      animating: false
    };
  }

  clicked() {
    this.setState({
      animating: true
    });
  }

  reset() {
    this.setState({
      animating: false
    });
  }

  render() {
    const classes = this.state.animating ? "Button animate" : "Button";
    return (
      <button
        className={classes}
        onClick={this.clicked}
        onAnimationEnd={this.reset}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;

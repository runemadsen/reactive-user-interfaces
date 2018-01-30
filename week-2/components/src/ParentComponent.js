import React, { Component } from 'react';
import './ParentComponent.css';

class ParentComponent extends Component {
  render() {
    return (
      <div className="parent">
        <p>I am a parent! My children are below:</p>
        {this.props.children}
      </div>
    );
  }
}

export default ParentComponent;

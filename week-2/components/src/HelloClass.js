import React, { Component } from 'react';

class HelloClass extends Component {
  render() {
    return <p>Hello {this.props.name} from a class!</p>;
  }
}

export default HelloClass;

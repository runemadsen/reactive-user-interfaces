import React, { Component } from 'react';

class Counter extends Component {
  // The constructor is called when the component is created
  // by React. This is called BEFORE the component is actually
  // rendered. If you need to do something when the component
  // renders, use componentDidMount()
  constructor(props) {
    // You have to call super(props) so the React Component class
    // can assign props to this.props and do some other magic.
    super(props);

    // We set the initial state of the component. These are the
    // values that change over time in the interface.
    this.state = {
      count: props.initialCount
    };

    // This is a stupid JavaScript thing that you need to do to
    // allow function callbacks in classes work.
    this.tick = this.tick.bind(this);

    // Start updating the state!
    setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return <div>I counted {this.state.count} times</div>;
  }
}

export default Counter;

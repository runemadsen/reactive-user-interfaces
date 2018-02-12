import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.state = {
      active: ''
    };
  }

  buttonClicked(label) {
    this.setState({
      active: label
    });
  }

  render() {
    const buttons = this.props.buttons.map((label, i) => {
      return (
        <Button
          label={label}
          active={this.state.active === label}
          onClick={this.buttonClicked}
          key={i}
        />
      );
    });

    return (
      <div className="App">
        <div className="buttons">{buttons}</div>
        <div className="output">You have selected: {this.state.active}</div>
      </div>
    );
  }
}

App.defaultProps = {
  buttons: ['Button 1', 'Button 2', 'Button 3']
};

export default App;

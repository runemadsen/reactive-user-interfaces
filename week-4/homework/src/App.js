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
    return (
      <div className="App">
        <div className="buttons">
          <Button
            label="Button 1"
            active={this.state.active === 'Button 1'}
            onClick={this.buttonClicked}
          />
          <Button
            label="Button 2"
            active={this.state.active === 'Button 2'}
            onClick={this.buttonClicked}
          />
          <Button
            label="Button 3"
            active={this.state.active === 'Button 3'}
            onClick={this.buttonClicked}
          />
        </div>
        <div className="output">You have selected: {this.state.active}</div>
      </div>
    );
  }
}

export default App;

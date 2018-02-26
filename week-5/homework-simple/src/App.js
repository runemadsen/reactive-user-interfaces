import React, { Component } from 'react';
import Input from './Input';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.state = {
      name: '',
      location: '',
      time: ''
    };
  }

  onNameChange(name) {
    this.setState({
      name: name
    });
  }

  onLocationChange(location) {
    this.setState({
      location: location
    });
  }

  onTimeChange(time) {
    this.setState({
      time: time
    });
  }

  render() {
    return (
      <div className="App">
        <div className="left">
          <Input onChange={this.onNameChange} label="Event name" />
          <Input onChange={this.onLocationChange} label="Location" />
          <Input onChange={this.onTimeChange} label="Time" />
        </div>
        <div className="right">
          <h1>{this.state.name}</h1>
          <address>{this.state.location}</address>
          <time>{this.state.time}</time>
        </div>
      </div>
    );
  }
}

export default App;

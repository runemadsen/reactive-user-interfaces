import React, { Component } from 'react';
import Input from './Input';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      name: '',
      location: '',
      time: ''
    };
  }

  onInputChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="left">
          <Input onChange={this.onInputChange} label="Event name" name="name" />
          <Input
            onChange={this.onInputChange}
            label="Location"
            name="location"
          />
          <Input onChange={this.onInputChange} label="Time" name="time" />
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

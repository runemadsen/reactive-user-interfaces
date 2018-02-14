import React, { Component } from 'react';
import './App.css';
import TemperatureInput from './TemperatureInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
    this.state = {
      scale: 'celsius',
      temperature: 30
    };
  }

  onTemperatureChange(scale, temperature) {
    if (!temperature) {
      temperature = 0;
    }
    this.setState({
      scale: scale,
      temperature: temperature
    });
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }

  render() {
    const fahrenheit =
      this.state.scale === 'celsius'
        ? this.toFahrenheit(this.state.temperature)
        : this.state.temperature;
    const celsius =
      this.state.scale === 'fahrenheit'
        ? this.toCelsius(this.state.temperature)
        : this.state.temperature;

    return (
      <div className="App">
        <TemperatureInput
          onChange={this.onTemperatureChange}
          scale="fahrenheit"
          temperature={fahrenheit}
        />
        <TemperatureInput
          onChange={this.onTemperatureChange}
          scale="celsius"
          temperature={celsius}
        />
      </div>
    );
  }
}

export default App;

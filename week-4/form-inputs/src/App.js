import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      message: ''
    };
  }
  onChange(e) {
    let txt = e.target.value;
    txt = txt.replace('fuck', '[deleted]');
    this.setState({
      message: txt
    });
  }
  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.onChange}
          placeholder="Write something"
          value={this.state.message}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;

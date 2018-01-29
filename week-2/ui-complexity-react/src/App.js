import React, { Component } from 'react';
import './App.css';
import Link from './Link';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'unemployed'
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    const isUnemployed = this.state.selected === 'unemployed';
    const isStudent = this.state.selected === 'student';
    const isEmployed = this.state.selected === 'employed';

    return (
      <div>
        <Link
          value="unemployed"
          selected={isUnemployed}
          onClick={this.buttonClicked}
        />
        <Link
          value="student"
          selected={isStudent}
          onClick={this.buttonClicked}
        />
        {isStudent && <input type="text" placeholder="School name" />}
        <Link
          value="employed"
          selected={isEmployed}
          onClick={this.buttonClicked}
        />
        {isEmployed && <input type="text" placeholder="Employer name" />}
      </div>
    );
  }
}

export default App;

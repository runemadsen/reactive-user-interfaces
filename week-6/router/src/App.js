import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;

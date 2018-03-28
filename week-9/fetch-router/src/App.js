import React, { Component } from "react";
import "./App.css";
import HomePage from "./HomePage";
import PersonPage from "./PersonPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/people/:id" component={PersonPage} />
        </div>
      </Router>
    );
  }
}

export default App;

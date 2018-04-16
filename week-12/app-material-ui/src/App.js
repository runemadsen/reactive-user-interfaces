import React, { Component } from "react";
import "./App.css";
import Button from "material-ui/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="raised" color="primary">
          This is a Material UI Button
        </Button>
      </div>
    );
  }
}

export default App;

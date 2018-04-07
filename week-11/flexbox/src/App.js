import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Header</header>
        <div className="wrapper">
          <aside>Sidebar</aside>
          <main>Main</main>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleBox = this.toggleBox.bind(this);
    this.state = {
      showBox: false
    };
  }

  toggleBox() {
    this.setState({
      showBox: !this.state.showBox
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleBox}>Toggle Box</button>
        <CSSTransition
          in={this.state.showBox}
          timeout={500}
          classNames="box"
          unmountOnExit
        >
          <div className="box">Hello!</div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;

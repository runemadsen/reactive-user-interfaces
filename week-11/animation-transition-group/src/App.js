import React, { Component } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.addPerson = this.addPerson.bind(this);
    this.state = {
      people: []
    };
  }

  addPerson() {
    let copy = this.state.people.slice();
    copy.push({
      name: "Rune Madsen"
    });
    this.setState({
      people: copy
    });
  }

  render() {
    const people = this.state.people.map(p => (
      <CSSTransition timeout={500} classNames="person">
        <div className="person">{p.name}</div>
      </CSSTransition>
    ));

    return (
      <div className="App">
        <button onClick={this.addPerson}>Add Person</button>
        <TransitionGroup className="person-list">{people}</TransitionGroup>
      </div>
    );
  }
}

export default App;

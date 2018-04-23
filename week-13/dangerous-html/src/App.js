import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
      </div>
    );
  }
}

App.defaultProps = {
  title: "Runes Awesome Project",
  body: `<p>This is my HTML paragraph</p>
<img src="images/bruce.jpg" />
<p>This is my HTML paragraph</p>
<p>This is my HTML paragraph</p>
<p>This is my HTML paragraph</p>
<p>This is my HTML paragraph</p>
`
};

export default App;

// Hello

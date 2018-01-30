import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Rune Madsen';

    let paragraph = null;
    const showParagraph = true;
    if (showParagraph) {
      paragraph = <p>This will show up if the if statement is true.</p>;
    }

    return (
      <div className="my-class">
        Hello {name}
        {paragraph}
        {showParagraph && (
          <p>This will also show up if the if statement is true.</p>
        )}
      </div>
    );
  }
}

export default App;

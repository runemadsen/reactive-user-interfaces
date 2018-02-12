import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.newspaperClicked = this.newspaperClicked.bind(this);
  }

  newspaperClicked(url) {
    console.log('go to', url);
  }

  render() {
    const data = [
      { title: 'New York Times', url: 'https://nytimes.com' },
      { title: 'Washington Post', url: 'https://www.washingtonpost.com/' },
      { title: 'The Guardian', url: 'https://www.theguardian.com' }
    ];

    const newspapers = data.map((paper, i) => (
      <ListItem
        title={paper.title}
        url={paper.url}
        onClick={this.newspaperClicked}
        key={i}
      />
    ));

    return <div className="App">{newspapers}</div>;
  }
}

export default App;

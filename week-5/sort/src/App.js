import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';

class App extends Component {
  constructor(props) {
    super(props);
    this.sortDescending = this.sortDescending.bind(this);
    this.sortAscending = this.sortAscending.bind(this);
    this.state = {
      sort: 'asc',
      tweets: [
        { username: 'runemadsen', body: 'This is the first tweet' },
        { username: 'runemadsen', body: 'This is the second tweet' },
        { username: 'runemadsen', body: 'This is the greatest third tweet' },
        { username: 'runemadsen', body: 'This is the greatest fourth tweet' },
        { username: 'runemadsen', body: 'This is the fifth tweet' }
      ]
    };
  }

  sortDescending() {
    this.setState({
      sort: 'desc'
    });
  }

  sortAscending() {
    this.setState({
      sort: 'asc'
    });
  }

  render() {
    let sortedTweets = this.state.tweets;

    if (this.state.sort === 'desc') {
      sortedTweets = sortedTweets.slice().reverse();
    }

    const tags = sortedTweets.map((tweet, i) => {
      return <Tweet username={tweet.username} body={tweet.body} key={i} />;
    });

    return (
      <div className="App">
        <div className="controls">
          <button onClick={this.sortAscending}>Ascending</button>
          <button onClick={this.sortDescending}>Descending</button>
        </div>
        {tags}
      </div>
    );
  }
}

export default App;

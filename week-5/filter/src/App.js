import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';

class App extends Component {
  constructor(props) {
    super(props);
    this.filterGreatest = this.filterGreatest.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.state = {
      filter: 'all',
      tweets: [
        { username: 'runemadsen', body: 'This is the first tweet' },
        { username: 'runemadsen', body: 'This is the second tweet' },
        { username: 'runemadsen', body: 'This is the greatest third tweet' },
        { username: 'runemadsen', body: 'This is the greatest fourth tweet' },
        { username: 'runemadsen', body: 'This is the fifth tweet' }
      ]
    };
  }

  filterGreatest() {
    this.setState({
      filter: 'greatest'
    });
  }

  filterAll() {
    this.setState({
      filter: 'all'
    });
  }

  render() {
    let filteredTweets = this.state.tweets;

    if (this.state.filter === 'greatest') {
      filteredTweets = filteredTweets.filter(tweet => {
        return tweet.body.match('greatest');
      });
    }

    const tags = filteredTweets.map((tweet, i) => {
      return <Tweet username={tweet.username} body={tweet.body} key={i} />;
    });

    return (
      <div className="App">
        <div className="controls">
          <button onClick={this.filterAll}>Show all</button>
          <button onClick={this.filterGreatest}>Show greatest</button>
        </div>
        {tags}
      </div>
    );
  }
}

export default App;

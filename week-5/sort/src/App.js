import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';

class App extends Component {
  constructor(props) {
    super(props);
    this.sortDescending = this.sortDescending.bind(this);
    this.sortAscending = this.sortAscending.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.state = {
      search: '',
      tweets: [
        { username: 'runemadsen', body: 'This is the first tweet' },
        { username: 'someone', body: 'This is the second tweet' },
        { username: 'anotherone', body: 'This is the greatest third tweet' },
        { username: 'thirduser', body: 'This is the greatest fourth tweet' },
        { username: 'clayshirky', body: 'This is the fifth tweet' }
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

  sortByName() {
    this.setState({
      sort: 'name'
    });
  }

  render() {
    let sortedTweets = this.state.tweets.slice();

    if (this.state.sort === 'desc') {
      sortedTweets = sortedTweets.reverse();
    } else if (this.state.sort === 'name') {
      sortedTweets = sortedTweets.sort(
        (tweetA, tweetB) => tweetA.username > tweetB.username
      );
    }

    const tags = sortedTweets.map((tweet, i) => {
      return <Tweet username={tweet.username} body={tweet.body} key={i} />;
    });

    return (
      <div className="App">
        <div className="controls">
          <button onClick={this.sortAscending}>Sort by Ascending</button>
          <button onClick={this.sortDescending}>Sort by Descending</button>
          <button onClick={this.sortByName}>Sort by Name</button>
        </div>
        {tags}
      </div>
    );
  }
}

export default App;

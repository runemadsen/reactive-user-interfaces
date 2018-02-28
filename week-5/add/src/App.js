import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';
import TweetBox from './TweetBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTweet = this.addTweet.bind(this);
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

  addTweet(username, body) {
    // We need to copy the array before updating it.
    // otherwise it changes the state array directly
    let arrayCopy = this.state.tweets.slice();
    // Put the new tweet into the copy array
    arrayCopy.push({ username: username, body: body });
    // Replace the entire array in state with the new array copy
    this.setState({
      tweets: arrayCopy
    });
  }

  render() {
    // Always show the newest tweets first
    const sortedTweets = this.state.tweets.slice().reverse();

    const tags = sortedTweets.map((tweet, i) => {
      return <Tweet username={tweet.username} body={tweet.body} key={i} />;
    });

    return (
      <div className="App">
        <TweetBox onSubmit={this.addTweet} />
        {tags}
      </div>
    );
  }
}

export default App;

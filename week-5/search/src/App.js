import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
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

  onSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    let searchedTweets = this.state.tweets;

    if (this.state.search !== '') {
      searchedTweets = searchedTweets.filter(tweet =>
        tweet.body.match(this.state.search)
      );
    }

    const tags = searchedTweets.map((tweet, i) => {
      return <Tweet username={tweet.username} body={tweet.body} key={i} />;
    });

    return (
      <div className="App">
        <div className="controls">
          <input type="text" placeholder="Search" onChange={this.onSearch} />
        </div>
        {tags}
      </div>
    );
  }
}

export default App;

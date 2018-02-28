import React, { Component } from 'react';
import './Tweet.css';

class Tweet extends Component {
  render() {
    return (
      <div className="Tweet">
        <span>@{this.props.username}</span>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Tweet;

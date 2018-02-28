import React, { Component } from 'react';
import './TweetBox.css';

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      tweet: ''
    };
  }

  onChange(e) {
    this.setState({
      tweet: e.target.value
    });
  }

  onSubmit(e) {
    this.props.onSubmit('runemadsen', this.state.tweet);
    this.setState({
      tweet: ''
    });
  }

  render() {
    return (
      <div className="TweetBox">
        <textarea onChange={this.onChange} value={this.state.tweet} />
        <button onClick={this.onSubmit}>Tweet</button>
      </div>
    );
  }
}

export default TweetBox;

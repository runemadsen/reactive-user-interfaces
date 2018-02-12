import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <date>{this.props.date}</date>
        <div className="text">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p className="byline">
            By <span>{this.props.byline}</span>
          </p>
        </div>
        <figure>
          <img src={this.props.imageUrl} />
        </figure>
      </div>
    );
  }
}

export default Article;

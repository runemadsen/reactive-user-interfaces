import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(e) {
    e.preventDefault();
    this.props.onClick(this.props.url);
  }

  render() {
    return (
      <div className="ListItem">
        <h2>{this.props.title}</h2>
        <a href={this.props.url} onClick={this.linkClicked}>
          Visit newspaper
        </a>
      </div>
    );
  }
}

export default ListItem;

import React, { Component } from 'react';

class Link extends Component {
  render() {
    let classes = 'btn';
    if (this.props.selected) {
      classes += ' active';
    }

    return (
      <a
        href="#"
        className={classes}
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.value}
      </a>
    );
  }
}

export default Link;

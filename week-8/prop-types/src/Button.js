import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  render() {
    const { children, size, variant, onClick } = this.props;

    let classes = 'Button';
    if (size) classes += ' ' + size;
    if (variant) classes += ' ' + variant;

    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  variant: PropTypes.oneOf(['alternative'])
};

export default Button;

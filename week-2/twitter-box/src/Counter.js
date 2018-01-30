import React from 'react';
import './Counter.css';

function Counter(props) {
  return (
    <div className="counter">
      <h3>{props.name}</h3>
      <span>{props.count}</span>
    </div>
  );
}

export default Counter;

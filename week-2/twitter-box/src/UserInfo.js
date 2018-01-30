import React from 'react';
import './UserInfo.css';

function UserInfo(props) {
  return (
    <div className="user-info">
      <h2>{props.name}</h2>
      <span>@{props.handle}</span>
    </div>
  );
}

export default UserInfo;

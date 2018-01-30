import React, { Component } from 'react';
import './App.css';
import UserInfo from './UserInfo';
import Counter from './Counter';
import ProfileImage from './profile.jpg';

class App extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-top" />
        <div className="profile-bottom">
          <img src={ProfileImage} className="pic" />
          <UserInfo name="Rune Madsen" handle="runemadsen" />
          <div className="counters">
            <Counter name="Tweets" count="2,949" />
            <Counter name="Following" count="706" />
            <Counter name="Followers" count="4,370" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

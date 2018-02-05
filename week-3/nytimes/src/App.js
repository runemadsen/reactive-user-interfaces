import React, { Component } from 'react';
import './App.css';
import Article from './Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article
          date="Feb. 4, 2018"
          title="Lin Bolen, a Trailblazing TV Executive, Dies at 76"
          description="Rising to a vice presidency at NBC in the early 1970s, Ms. Bolen energized the network’s daytime lineup."
          byline="Neil Genzlinger"
          imageUrl="https://static01.nyt.com/images/2018/02/05/business/05bolen/05bolenobit1-mediumThreeByTwo210.jpg"
        />
        <Article
          date="Feb. 4, 2018"
          title="‘Winchester’ Claims No. 3 at Box Office Amid Super Bowl Slowdown"
          description="With movie studios avoiding competition with the Super Bowl, the newcomer “Winchester” took in $9.3 million this weekend."
          byline="Brooks Barnes"
          imageUrl="https://static01.nyt.com/images/2018/02/05/arts/05box1/05box1-mediumThreeByTwo210.jpg"
        />
        <Article
          date="Feb. 4, 2018"
          title="Trump to Withdraw Nomination of Climate Skeptic as Top Environmental Adviser"
          description="The White House is dropping Kathleen Hartnett White from consideration to lead the Council on Environmental Quality."
          byline="Lisa Friedman"
          imageUrl="https://static01.nyt.com/images/2018/02/04/climate/04cli-ceq/04cli-ceq-mediumThreeByTwo210.jpg"
        />
      </div>
    );
  }
}

export default App;

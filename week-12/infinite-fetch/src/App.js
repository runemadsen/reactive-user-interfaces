import React, { Component } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroller";
import { CircularProgress } from "material-ui/Progress";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore(page) {
    fetch("https://swapi.co/api/people/?page=" + page)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        let copy = this.state.people.concat(data.results);
        this.setState({ people: copy });
      });
  }

  render() {
    const people = this.state.people.map(p => (
      <div className="person" key={p.url}>
        <h2>{p.name}</h2>
        <p>Hair color: {p.hair_color}</p>
      </div>
    ));

    return (
      <div className="App">
        <h1>Start Wars Characters</h1>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={true}
          loader={<CircularProgress key={0} />}
        >
          {people}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;

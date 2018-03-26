import React, { Component } from "react";
import "./App.css";

const API_URL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2663a6d57fc14ea28fb2c6aa07827f5d";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      docs: [],
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data =>
        this.setState({ docs: data.response.docs, isLoading: false })
      )
      .catch(error => this.setState({ error: error, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    if (this.state.error) {
      return <p>Error! {this.state.error}</p>;
    }

    const article = this.state.docs[0];

    return (
      <div className="App">
        <h1>{article.headline.main}</h1>
        <p>{article.snippet}</p>
        <a href={article.web_url}>Go to article</a>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      people: []
    };
  }

  componentWillMount() {
    fetch("https://swapi.co/api/people/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ people: data.results, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    const people = this.state.people.map(p => {
      const splitUrl = p.url.split("/");
      const id = splitUrl[splitUrl.length - 2];
      return (
        <div key={p.url}>
          <h3>{p.name}</h3>
          <Link to={"/people/" + id}>Visit person</Link>
        </div>
      );
    });

    return <div className="HomePage">{people}</div>;
  }
}

export default HomePage;

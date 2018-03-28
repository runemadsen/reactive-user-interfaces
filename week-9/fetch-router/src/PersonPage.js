import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PersonPage.css";

class PersonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      person: {}
    };
  }

  componentWillMount() {
    this.loadData(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.loadData(nextProps.match.params.id);
    }
  }

  loadData(id) {
    this.setState({
      isLoading: true
    });

    fetch("https://swapi.co/api/people/" + id)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ person: data, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="PersonPage">
        <h1>{this.state.person.name}</h1>
        <ul>
          <li>Eye color: {this.state.person.eye_color}</li>
          <li>Gender: {this.state.person.gender}</li>
          <li>Height: {this.state.person.height}</li>
          <li>Mass: {this.state.person.mass}</li>
        </ul>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default PersonPage;

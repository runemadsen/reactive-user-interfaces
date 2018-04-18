import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    const res = await fetch("https://swapi.co/api/people/" + query.id + "/");
    const data = await res.json();
    return {
      person: data
    };
  }

  render() {
    const { person } = this.props;
    return (
      <div>
        <h1>{person.name}</h1>
        <p>Eye Color: {person.eye_color}</p>
      </div>
    );
  }
}

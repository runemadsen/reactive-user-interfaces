import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

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
      <Layout>
        <h1>{person.name}</h1>
        <p>Eye Color: {person.eye_color}</p>
      </Layout>
    );
  }
}

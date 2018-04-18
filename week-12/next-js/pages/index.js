import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../components/Layout";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch("https://swapi.co/api/people/");
    const data = await res.json();
    return {
      people: data.results
    };
  }

  render() {
    const list = this.props.people.map(p => {
      const splitUrl = p.url.split("/");
      const id = splitUrl[splitUrl.length - 2];

      return (
        <div key={p.url} className="person">
          <h2>{p.name}</h2>
          <Link as={"/people/" + id} href={"/people?id=" + id}>
            <a>Visit person</a>
          </Link>
        </div>
      );
    });

    return (
      <Layout>
        <h1>Star Wars Characters</h1>
        {list}
      </Layout>
    );
  }
}

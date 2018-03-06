import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
  render() {
    const contactList = this.props.contacts.map(c => (
      <div className="contact" key={'contact' + c.id}>
        <h2>
          {c.first} {c.last}
        </h2>
        <p>{c.email}</p>
        <Link to={'/contacts/' + c.id}>Go to person</Link>
      </div>
    ));
    return <div className="HomePage">{contactList}</div>;
  }
}

export default HomePage;

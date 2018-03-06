import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage">
        <h1>
          {this.props.contact.first} {this.props.contact.last}
        </h1>
        <p>{this.props.contact.email}</p>
        <Link to="/">Back to contact list</Link>
      </div>
    );
  }
}

export default ContactPage;

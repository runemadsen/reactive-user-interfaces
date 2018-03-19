import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { name: 'Person 1', email: 'first@person.com' },
        { name: 'Person 2', email: 'second@person.com' },
        { name: 'Person 3', email: 'third@person.com' },
        { name: 'Person 4', email: 'fourth@person.com' },
        { name: 'Person 5', email: 'fifth@person.com' },
        { name: 'Person 6', email: 'sixth@person.com' },
        { name: 'Person 7', email: 'seventh@person.com' }
      ]
    };
    this.onNewContact = this.onNewContact.bind(this);
  }

  onNewContact(name, email) {
    const copy = this.state.contacts.slice();
    copy.push({
      name: name,
      email: email
    });
    this.setState({
      contacts: copy
    });
  }

  render() {
    const list = this.state.contacts.map(p => (
      <p key={p.email}>
        {p.name} - {p.email}
      </p>
    ));

    return (
      <div className="App">
        <h1>The list</h1>
        {list}
        <Form onSubmit={this.onNewContact} />
      </div>
    );
  }
}

export default App;

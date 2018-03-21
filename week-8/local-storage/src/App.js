import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
    this.clearContacts = this.clearContacts.bind(this);

    let initialState = localStorage.getItem('appData');
    if (initialState) {
      this.state = JSON.parse(initialState);
    } else {
      this.state = {
        contacts: []
      };
    }
  }

  addContact() {
    // Update the state
    let copy = this.state.contacts.slice();
    copy.push({
      name: 'Rune',
      email: 'rune@runemadsen.com',
      id: this.state.contacts.length
    });

    this.setState({
      contacts: copy
    });
  }

  clearContacts() {
    this.setState({
      contacts: []
    });
  }

  componentDidUpdate() {
    localStorage.setItem('appData', JSON.stringify(this.state));
  }

  render() {
    const list = this.state.contacts.map(c => (
      <p key={c.id}>
        {c.name} - {c.email}
      </p>
    ));

    return (
      <div className="App">
        <h1>Contacts</h1>
        {list}
        <button onClick={this.addContact}>Add Contact</button>
        <button onClick={this.clearContacts}>Clear Contacts</button>
      </div>
    );
  }
}

export default App;

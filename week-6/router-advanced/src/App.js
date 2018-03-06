import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { first: 'First', last: 'Person', email: 'first@person.com', id: 1 },
        { first: 'Second', last: 'Person', email: 'second@person.com', id: 2 },
        { first: 'Third', last: 'Person', email: 'third@person.com', id: 3 }
      ]
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={props => {
              return <HomePage contacts={this.state.contacts} />;
            }}
          />
          <Route
            path="/contacts/:id"
            render={props => {
              // Find contact
              const contact = this.state.contacts.find(
                c => c.id === parseInt(props.match.params.id)
              );

              // Pass to component as prop
              return <ContactPage contact={contact} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;

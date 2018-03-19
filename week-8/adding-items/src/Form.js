import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
    this.emailChanged = this.emailChanged.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  nameChanged(e) {
    this.setState({
      name: e.target.value
    });
  }

  emailChanged(e) {
    this.setState({
      email: e.target.value
    });
  }

  buttonClicked() {
    this.props.onSubmit(this.state.name, this.state.email);
    this.setState({
      name: '',
      email: ''
    });
  }

  render() {
    return (
      <div className="Form">
        <h3>Add new contact</h3>
        <input
          value={this.state.name}
          type="text"
          placeholder="Name"
          onChange={this.nameChanged}
        />
        <input
          value={this.state.email}
          type="email"
          placeholder="Email"
          onChange={this.emailChanged}
        />
        <button onClick={this.buttonClicked}>Save</button>
      </div>
    );
  }
}

export default Form;

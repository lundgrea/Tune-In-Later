import React, { Component } from 'react';

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  loginInputs = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }


  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={email}
          name="email"
          placeholder='example@example.com'
          onChange={this.loginInputs}
          />
        <input 
          type="password"
          value={password}
          name="password"
          placeholder='Password'
          onChange={this.loginInputs}
          />
        <button>Login</button>
      </form>
    </section>
    )
  }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { loginUser } from '../../apiCalls/apiCalls'

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  loginInputs = e => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault();

    const user = await loginUser(this.state)
    await this.props.login(user)
  }
  render() {
    const { email, password } =  this.state
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
          type="input"
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

export const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LoginForm)
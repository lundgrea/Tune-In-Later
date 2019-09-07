import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, handleErrors } from '../../actions';
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
    if(user.error) {
      this.props.handleErrors(user.error)
    } else {
      await this.props.login(user)
    }
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

export const mapStateToProps = store => ({
  error: store.error
});

export const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  handleErrors: error => dispatch(handleErrors(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
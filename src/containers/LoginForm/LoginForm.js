import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, handleErrors } from '../../actions';
import { loginUser } from '../../apiCalls/apiCalls';
import { storeFavorites } from "../../actions";
import { getFavorites } from '../../apiCalls/apiCalls';
import { Route, NavLink, Link, Switch } from "react-router-dom";

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

    const loggedUser= await loginUser(this.state)
    if(loggedUser.error) {
      this.props.handleErrors(loggedUser.error)
    } else {
      await this.props.login(loggedUser)
      const favorites = await getFavorites(this.props.user.id)
      await this.props.storeFavorites(favorites)
      this.setState({
        email: '',
        password: ''
      })
    }
  }

  render() {
    const { email, password } =  this.state
    if(!this.props.user){
      return (
        <>
          <form className='login-form'>
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
          <Link to='/user'>
              <button onClick={this.handleSubmit}>Login</button>
          </Link>
        </form>
        <Route exact path='/user'></Route>
      </>
      )
    } else {
      return ('')
    }
  }
}

export const mapStateToProps = store => ({
  error: store.error,
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  handleErrors: error => dispatch(handleErrors(error)),
  storeFavorites: (favorites) => dispatch(storeFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
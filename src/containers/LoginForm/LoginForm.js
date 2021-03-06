import React, { Component } from "react";
import { connect } from "react-redux";
import { login, handleErrors } from "../../actions";
import { loginUser } from "../../apiCalls/apiCalls";
import { storeFavorites } from "../../actions";
import { getFavorites } from "../../apiCalls/apiCalls";
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./LoginForm.css";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  loginInputs = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.handleErrors("");
    const loggedUser = await loginUser(this.state);
    if (loggedUser.error) {
      this.props.handleErrors(loggedUser.error);
    } else {
      await this.props.login(loggedUser);
      const favorites = await getFavorites(this.props.user.id);
      await this.props.storeFavorites(favorites);
      this.setState({
        email: "",
        password: ""
      });
    }
  };

  render() {
    const { email, password } = this.state;
    if (!this.props.user) {
      return (
        <article className="login">
          <form className="login-form">
            <h3>User Login</h3>
            <input
              type="text"
              value={email}
              name="email"
              placeholder="example@example.com"
              className="login-input"
              onChange={this.loginInputs}
            />
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              className="login-input"
              onChange={this.loginInputs}
            />
            <Link to="/user">
              <button className="login-button" onClick={this.handleSubmit}>
                Login
              </button>
            </Link>
          </form>
          <Route exact path="/user"></Route>
        </article>
      );
    } else {
      return "";
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
  storeFavorites: favorites => dispatch(storeFavorites(favorites))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

LoginForm.propTypes = {
  error: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  handleErrors: PropTypes.func.isRequired,
  storeFavorites: PropTypes.func.isRequired
};

import React from "react";
import Search from "../Search/Search";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { logout } from '../../actions';
import { connect } from 'react-redux';





const App = ({ logout, error, user, favorites}) => {

  return (
    <>
      <Route exact path="/" />
      <h1>TUNE-IN LATER</h1>
      <NavLink exact to="/login">
        LOGIN
      </NavLink>
      <NavLink exact to='/' onClick={logout}>
        LOGOUT
      </NavLink>
      <NavLink exact to='/my-collection'>
        Favorites
      </NavLink>
      <Search />
      <SignUpForm />
      <Route exact path='/my-collection' render={() => <CardContainer dataType={"favorites"}/> } />
      <Route exact path="/login" render={() => <LoginForm />} />
      <div>{error || <CardContainer dataType={"albums"}/>}</div>
      

    </>
  );
};


export const mapStateToProps = store => ({
  error: store.error,
  user: store.user,
  favorites: store.favorites
});


export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

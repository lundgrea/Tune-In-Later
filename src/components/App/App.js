import React from "react";
import Search from "../../containers/Search/Search";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import CardContainer from "../../containers/CardContainer/CardContainer";
import LoginForm from "../LoginForm/LoginForm";
import { SignUpForm } from "../SignUpForm/SignUpForm";

const App = () => {
  return (
    <>
      <Route exact path="/" />
      <h1>TUNE-IN LATER</h1>
      <NavLink exact to="/login">
        LOGIN
      </NavLink>
      <Search />
      <CardContainer />
      <SignUpForm />
      <Route exact path="/login" render={() => <LoginForm />} />
    </>
  );
};

export default App;

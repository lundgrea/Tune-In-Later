import React, { Component } from 'react';
import Search from '../../containers/Search/Search'
import './App.css';
import CardContainer from '../../containers/CardContainer/CardContainer';
import LoginForm from '../LoginForm/LoginForm'

const App = () => {
  return (
    <>
    <h1>HOLA</h1>
    <Search />
    <CardContainer />
    <LoginForm />
    </>
  )
}

export default App;

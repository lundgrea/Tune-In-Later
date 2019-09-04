import React, { Component } from 'react';
import Search from '../Search/Search'
import './App.css';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      albums: []
    }
  }
  render() {
    return (
      <>
      <h1>HOLA</h1>
      <Search />
      <CardContainer />
      </>
    )
  }
}

export default App;

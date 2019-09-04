import React, { Component } from 'react';
import Search from '../Search/Search'
import './App.css';

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
      <Search/>
      </>
    )
  }
}

export default App;

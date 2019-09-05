import React, { Component } from 'react';
import { postUser } from "../../apiCalls/apiCalls";


export class SignUpForm extends Component {
  constructor() {
    super();
      this.state = {
        name: '',
        email: '',
        password: ''
      }
  }

  handleInputChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  createAccount = (e) => {
    e.preventDefault();
    postUser(this.state);
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }


  render(){
    return (
      <form onSubmit={this.createAccount}>
        <input 
        type='text' 
        value={this.state.name} 
        placeholder='Joe Don' 
        name='name' 
        onChange={this.handleInputChange} 
        ></input>
        <input 
        type='text' 
        value={this.state.email} 
        placeholder='example@example.com' 
        name='email' 
        onChange={this.handleInputChange} 
        ></input>
        <input 
        type='text' 
        value={this.state.password} 
        placeholder='password' 
        name='password' 
        onChange={this.handleInputChange} 
        ></input>
        <button>Create Account</button>
      </form>
    )
  }
}
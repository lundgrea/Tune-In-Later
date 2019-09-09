import React, { Component } from 'react';
import { postUser } from "../../apiCalls/apiCalls";
import { handleErrors } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
 
class SignUpForm extends Component {
  constructor(props) {
    super(props);
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

  createAccount = async (e) => {
    e.preventDefault();
    const user = await postUser(this.state);
    if(user.error) {
      this.props.handleError('Email has already been used')
    } else {
      this.setState({
        name: '',
        email: '',
        password: ''
      })
    }
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

export const mapDispatchToProps = dispatch => ({
  handleError: error => dispatch(handleErrors(error))
});

 export default connect(null, mapDispatchToProps)(SignUpForm)


 SignUpForm.propTypes = {
   handleError: PropTypes.func.isRequired
 }
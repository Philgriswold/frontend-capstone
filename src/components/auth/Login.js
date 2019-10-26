import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import APIManager from '../../APIManager';
import Register from './Register';
// import ReactModalLogin from "react-modal-login";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ifStatement } from '@babel/types';
 
class Login extends Component {
    // Set initial state
    state = {
      username: "",
      email: "",
      password: "",
      hideReg : true
    }
    showReg= () => {
      this.setState({ hideReg: false});
    }
    hideReg = () => {
      this.setState({ hideReg: true});
    }
  
    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
      evt.persist()
      console.log(evt)
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }
  
    handleLogin = (e) => {
      e.preventDefault()
      let username = this.state.username;
      let email = this.state.email;
      let password = this.state.password

      APIManager.searchUsername(username)
      .then(response => {
        if (response.length === 0) {
         alert('Please enter a username.');
        } else if (response.length === 1 && response[0].password !== password) {
         alert('Password is incorrect, please try again');
        } else if (password === '') {
            alert('Please enter a password');
        } else if  (username === ''){
            alert('Please enter a username');
        } else if (response[0].password === password) {
            this.setState({
              userId: response[0].id
            })
            this.props.setUser(response[0].id)
            this.props.history.push(`/shops`);
          }
          }
          )
      }

        
  
    render() {
      return (
        <>
          {this.state.hideReg && (
        <form onSubmit={this.handleLogin}>
          <fieldset>
            <h3>Please sign in</h3>
            <div className="field">
                 <label htmlFor="username">Username</label>
                 <input placeholder="Username" onChange={this.handleFieldChange} required="" autoFocus="" id="username" />
            </div>
            <div className="formgrid">
              <input onChange={this.handleFieldChange} type="email"
                id="email"
                placeholder="Email address"
                required="" autoFocus="" />
              <label htmlFor="inputEmail">Email address</label>
  
              <input onChange={this.handleFieldChange} type="password"
                id="password"
                placeholder="Password"
                required="" />
              <label htmlFor="inputPassword">Password</label>
            </div>
            <button type="submit">
              Sign in
              </button>
              <p htmlFor="register" onClick={this.showReg}>Not registered? Click here</p>
           </fieldset>
        </form>
          )}
          {!this.state.hideReg && (
      <Register activeUser={this.props.activeUser} setUser={this.props.setUser}hideReg={this.hideReg} />
          )}
      </>
      )
    }
  }
  
export default withRouter(Login);


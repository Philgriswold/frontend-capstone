import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import APIManager from '../../APIManager';
import Register from './Register';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
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
      let password = this.state.password;

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
        <div className="authWrapper">
          <section>
          <div className="authWrap">
          {this.state.hideReg && (
        <Form className="authForm" onSubmit={this.handleLogin}>
            <h3>Please sign in</h3>
            <FormGroup className="field">
                 <Label htmlFor="username"></Label>
                 <Input placeholder="Username" onChange={this.handleFieldChange} required="" autoFocus="" id="username" />
            </FormGroup>
            <FormGroup className="field">
                 <Label htmlFor="inputEmail"></Label>
                 <Input placeholder="Email address" onChange={this.handleFieldChange} required="" autoFocus=""  id="email" />
            </FormGroup>
            <FormGroup className="field">
                 <Label htmlFor="inputPassword"></Label>
                 <Input placeholder="Password" onChange={this.handleFieldChange} required="" autoFocus=""  id="password" />
            </FormGroup>
            <Button type="submit" className="loginSubmitButton">
              Sign in
              </Button>
              <p htmlFor="register" onClick={this.showReg}>Not registered? Click here</p>
        </Form>
         )}
          {!this.state.hideReg && (
      <Register activeUser={this.props.activeUser} setUser={this.props.setUser}hideReg={this.hideReg} />
          )}
          <div>
         <img className="authImage" src="../images/ramenatorlogo.png" alt="site logo" />
         </div>
          </div>
          </section>
          </div>
      </>
      )
    }
  }
  
export default withRouter(Login);


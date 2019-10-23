import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import APIManager from '../../APIManager';
import Register from './Register';
// import ReactModalLogin from "react-modal-login";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
 
class Login extends Component {
    // Set initial state
    state = {
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
      /*
          For now, just store the email and password that
          the customer enters into local storage.
      */
      let credentials = { email: this.state.email, password: this.state.password }
      APIManager.searchUsername(this.state.email)
      .then(result => {
        if (result.length > 0){
          console.log(result)
          //this returns an array - we only need object
          this.props.setUser(result[0]);
          this.props.history.push("/shops");
        }else {
          APIManager.addUser(credentials)
          .then(result => {
            //this returns an object
            this.props.setUser(result);
          })
          this.props.history.push("/shops");
        }
      })
    }
  
    render() {
      return (
        <>
          {this.state.hideReg && (
        <form onSubmit={this.handleLogin}>
          <fieldset>
            <h3>Please sign in</h3>
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
      <Register setUser={this.props.setUser} hideReg={this.hideReg} />
          )}
      </>
      )
    }
  }
  
export default withRouter(Login);


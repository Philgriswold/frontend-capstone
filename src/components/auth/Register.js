import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import APIManager from '../../APIManager';

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange);
    };

    handleRegister = (e) => {
        e.preventDefault()
        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;
        let confirmPassword = this.state.confirmpassword
        if (password !== confirmPassword) {
            alert("Passwords do not match")
        } else {
            let newUser = {
                username: username,
                email: email,
                password: password
            };
            console.log("hey", newUser)

        APIManager.addUser(newUser).then(result => {
            console.log("result", result)
            this.setState({
                userid: result.id
            })
            this.props.setUser(result.id);
            this.props.history.push(`/shops`);
        })
        }

    };

    render() {
        return  (
            <>
            <form className="register form" onSubmit={this.handleRegister}>
                <h3>Register</h3>
                <div className="field">
                      <label htmlFor="userName">Username</label>
                      <input placeholder="Username" onChange={this.handleFieldChange} required="" autoFocus="" id="username" />
                </div>
                <div className="register field">
                    <label htmlFor="email">Email Address</label>
                    <input placeholder="Email Address" onChange={this.handleFieldChange} required="" autoFocus="" id="email" />
                </div>
                <div className="register field">
                    <label htmlFor="password">Password</label>
                    <input placeholder="Password" onChange={this.handleFieldChange} type="password" required="" autoFocus="" id="password" />
                </div><div className="register field">
                    <label htmlFor="password">Confirm Password</label>
                    <input placeholder="Confirm Password" onChange={this.handleFieldChange} type="password" required="" autoFocus="" id="confirmpassword" />
                </div>
                <button type="submit" className="register button" >Submit</button>
            </form>
            <p onClick={this.props.hideReg}>Already have an account? Click to sign in</p>
            </>
        )
    }
 }



export default withRouter(Register);
import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import APIManager from '../../APIManager';

class Register extends Component {
    state = {
        email: "",
        password: "",
        confirmpassword: "",
        users: []
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange);
    };

    handleRegister = (e) => {
        e.preventDefault()
        let email = this.state.email;
        let password = this.state.password;
        let confirmPassword = this.state.confirmpassword
        if (password !== confirmPassword) {
            alert("Passwords do not match")
        } else {
            let newUser = {
                email: this.state.email,
                password: this.state.password,
            };
        APIManager.addUser(newUser).then(result => {
            this.setState({
                userId: result.Id
            })
            this.props.setUser(result.Id);
            this.props.history.push(`/shops`);

        })
        }

    };

    render() {
        return  (
            <>
            <form className="register form" onSubmit={this.handleRegister}>
                <h3>Register</h3>
                <div className="register field">
                    <label htmlFor="email">Email Address</label>
                    <input placeholder="Email Address" onChange={this.handleFieldChange} required="" autoFocus="" id="email" />
                </div>
                <div className="register field">
                    <label htmlFor="password">Password</label>
                    <input placeholder="Password" onChange={this.handleFieldChange} type="password" required="" autoFocus="" id="password" />
                </div><div className="register field">
                    <label htmlFor="password">Confirm Password</label>
                    <input placeholder="Confirm Password" onChange={this.handleFieldChange} type="password" required="" autoFocus="" id="confirm password" />
                </div>
                <button type="submit" className="register button" >Submit</button>
            </form>
            </>
        )
    }
 }



export default withRouter(Register);
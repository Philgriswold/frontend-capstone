import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import APIManager from '../../APIManager';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

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
            <div className="authWrapper">
                <section>
                <div className="authWrap">
            <Form className="authForm" onSubmit={this.handleRegister}>
                <h3>Register</h3>
                <FormGroup className="field">
                      <Label htmlFor="userName"></Label>
                      <Input placeholder="Username" onChange={this.handleFieldChange} required="" autoFocus="" id="username" />
                </FormGroup>
                <FormGroup className="field">
                    <Label htmlFor="email"></Label>
                    <Input placeholder="Email Address" onChange={this.handleFieldChange} required="" autoFocus="" id="email" />
                </FormGroup>
                <FormGroup className="field">
                    <Label htmlFor="password"></Label>
                    <Input placeholder="Password" onChange={this.handleFieldChange} type="password" required="" autoFocus="" id="password" />
                </FormGroup>
                <FormGroup className="field">
                    <Label htmlFor="password"></Label>
                    <Input placeholder="Confirm Password" onChange={this.handleFieldChange} type="password" required="" autoFocus="" id="confirmpassword" />
                </FormGroup>
                <button type="submit" className="registerSubmitButton" >Submit</button>
                <p onClick={this.props.hideReg}>Already have an account? Click to sign in</p>
            </Form>
           
            </div>
            </section>
            </div>
            </>
        )
    }
 }



export default withRouter(Register);
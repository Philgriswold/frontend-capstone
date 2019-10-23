import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Login from "../src/components/auth/Login"
import ApplicationViews from '../src/ApplicationViews'
import NavBar from '../src/components/nav/NavBar'
import './App.css';


class App extends Component {
    state = {
      user: null,
      userId: ""
  }
        //  user: localStorage.getItem("credentials") !== null,
        //  userId: localStorage.getItem("credentials") !== null ? JSON.parse(localStorage.getItem("credentials")).id : false

isAuthenticated = () => sessionStorage.getItem("credentials") !== null


setUser = (authObj) => {
  sessionStorage.setItem(
    "credentials",
    JSON.stringify(authObj)
  )
  this.setState({
    user: this.isAuthenticated(),
    userid: authObj.id
  });
}

getUser(){if(this.isAuthenticated){this.setState({user: true})}} 

clearUser = () => {
  localStorage.clear()
  this.setState({
    user: false
  });
  this.props.history.push("/login");
}

render() {
  return(
    <>
     {this.state.user ? (
     <>
       <NavBar clearUser ={this.clearUser} {...this.props}/>
       <ApplicationViews userId={this.state.userId} />
    </>
     ) : (
    <>
    <Login setUser={this.setUser} />

    </>
     )
    }
   </>
  )
 }
}


export default withRouter(App);


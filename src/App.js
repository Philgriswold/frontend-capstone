import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Login from "../src/components/auth/Login"
import ApplicationViews from '../src/ApplicationViews'
import NavBar from '../src/components/nav/NavBar'
import './App.css';


class App extends Component {
    state = {
      user: sessionStorage.getItem('activeUser') !== null,
      activeUser: ''
  };
        //  user: localStorage.getItem("credentials") !== null,
        //  userId: localStorage.getItem("credentials") !== null ? JSON.parse(localStorage.getItem("credentials")).id : false

isAuthenticated = () => sessionStorage.getItem('activeUser') !== null;


setUser = id => {
  sessionStorage.setItem(
    'activeUser', id);
    this.setState({ activeUser: this.getUser(), user:true });
};

getUser() {
     if (sessionStorage.getItem('activeUser')) {
       return parseInt(sessionStorage.getItem('activeUser'));
     } else {
           return '';
     }
    }

clearUser = () => {
  sessionStorage.removeItem('activeUser');
  this.setState({
    user: this.isAuthenticated()
  });
};

render() {
  return (
    <div className='App'>
    {this.state.user ? (
     <>
       <NavBar clearUser ={this.clearUser} user={this.state.user} {...this.props} 
       activeUser={this.state.activeUser}/>
       <ApplicationViews user={this.state.user} {...this.props} activeUser={this.state.activeUser} />
    </>
     ) : (
    <Login setUser={this.setUser}
          getUser={this.getUser}
          setUser={this.setUser}
          user={this.state.user}
          {...this.props}
          activeUser={this.state.activeUser}
    />
  )}
  </div>
  );
 }
}


export default withRouter(App);


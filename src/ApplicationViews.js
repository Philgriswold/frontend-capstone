import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register'

class ApplicationViews extends Component {

    render() {
        return (
            <>
              <Route path="/login" render={props => {
               return <Login setUser={this.props.setUser} {...props} />
                }} />
               <Route path="/register" render={props => {
               return <Register setUser={this.props.setUser} {...props} />
              }} />
            </>
  )
}
}

export default ApplicationViews
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';
import ShopList from './components/shops/ShopList'

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
               <Route path="/shops" render={props => {
               return <ShopList setUser={this.props.setUser} {...props} {...this.props} />
              }} />
            </>
  )
}
}

export default withRouter(ApplicationViews)
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';
import ShopList from './components/shops/ShopList'
import ShopDetail from './components/shops/ShopDetail';
import ShopCard from './components/shops/ShopCard';
import FavoriteLocationList from './components/favorites/FavoriteLocationList'
import ShopReviewCard from './components/shops/ShopReviewCard';
import ShopReviewEditCard from './components/shops/ShopReviewCard'

class ApplicationViews extends Component {

    render() {
        return (
            <>
              <Route path="/login" render={props => {
               return <Login activeUser={this.props.activeUser} {...props} />
                }} />
               <Route path="/register" render={props => {
               return <Register activeUser={this.props.activeUser} {...props} />
              }} />
               <Route exact path="/shops" render={props => {
               return <ShopList activeUser={this.props.activeUser} {...props} {...this.props} />
              }} />
              <Route exact path="/details/:shopId(\d+)" render={(props) => {
               return <ShopDetail shopId={parseInt(props.match.params.shopId)} {...this.props} {...props} />
              }} />
              <Route path="/favorites" render={(props) => {
               return <FavoriteLocationList activeUser={this.props.activeUser} {...props} {...this.props} />
              }} />
              <Route path="/reviews/:reviewId(\d+)/edit" render={(props) => {
               return <ShopReviewEditCard activeUser={this.props.activeUser} {...props} {...this.props} />
              }} />
            </>
  )
}
}

export default withRouter(ApplicationViews)
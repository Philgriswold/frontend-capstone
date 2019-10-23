import React, { Component } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { Route, withRouter, Redirect } from "react-router-dom";
import APIManager from "../../APIManager";

class ShopDetail extends Component {
    state = {
        name: "",
        address: "",
        details: "",
    };

componentDidMount() {
    APIManager.get(this.props.shopId).then(shop => { 
        this.setState({
        shops: shops
    })},
}

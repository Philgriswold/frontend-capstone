import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';

class ShopDetailCard extends Component {
    state = {
        shops: "",
        name: "",
        address: "",
        category: "",
        description: "",
    }

    handleDelete = (id) => {
        APIManager.delete(id)
        .then(() => this.props.getData());
    }

    componentDidMount(){
        APIManager.getShopById(this.props.match.params.shopId)
        .then((shopId) => {
            this.setState({
                shopId: shopId
            })
        })
    }

render() {
    console.log("hey", this.props)
    return (
        <div className="card">
            <div className="card-content">
                <h1>hello im a card</h1>
                <p>name: {this.props.shop.name}</p>
                <h3> <span className="card-shopname">{this.props.shop.name}</span></h3>
                <h4> <span className="card-address">{this.props.shop.address}</span></h4>
                <div>
                
                </div>
             </div>
        </div>
      ) 
}

}

export default ShopDetailCard;

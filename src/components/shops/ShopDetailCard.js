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
        <div className="detail-card">
            <div className="card-content">
                <h3> <span className="card-shopname">{this.props.shop.name}</span></h3>
                <h4> <span className="card-address">{this.props.shop.address}</span></h4>
                <h4> <span className="card-category">{this.props.shop.category}</span></h4>
                <h4> <span className="card-description">{this.props.shop.description}</span></h4>
             </div>
        </div>
      ) 
}

}

export default ShopDetailCard;

{/* <div className="card">
            <div className="card-content">
                <h3> <span className="card-shopname">{
                (this.props.shops.name)}</span></h3>
                <h4> <span className="card-address">{
                (this.props.shops.address)}</span></h4>
                <div>
                <Link to={`/shops/${this.props.shops.id}`}><button className="detailsBtn">Details</button></Link>
                </div>
             </div>
        </div> */}
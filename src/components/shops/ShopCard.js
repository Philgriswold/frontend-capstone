import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';

class ShopCard extends Component {

    handleDelete = (id) => {
        APIManager.delete(id)
        .then(() => this.props.getData());
    }
render() {
    return (
        <div className="card">
            <div className="card-content">
                <h1>cards cards</h1>
                <h3> <span className="card-shopname">{
                (this.props.shops.name)}</span></h3>
                <h4> <span className="card-address">{
                (this.props.shops.address)}</span></h4>
                <div>
                <Link to={`/shops/${this.props.shops.id}`}><button className="detailsBtn">Details</button></Link>
                </div>
             </div>
        </div>
      ) 
}

}

export default ShopCard;

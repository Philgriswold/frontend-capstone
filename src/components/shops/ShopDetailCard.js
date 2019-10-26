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
    console.log("here at card",this.props.shops)
    return (
        <div className="card">
            <div className="card-content">
                <h3> <span className="card-shopname">{
                (this.props.shops.name)}</span></h3>
                <h4> <span className="card-address">{
                (this.props.shops.address)}</span></h4>
                <h4> <span className="card-category">{
                (this.props.shops.category)}</span></h4>
                <h4> <span className="card-description">{
                (this.props.shops.description)}</span></h4>
                <div>
                {/* <Link to={`/shops/${this.props.name.id}`}><button className="detailsBtn">Details</button></Link> */}
                <button type="button" onClick={() => {this.props.history.push(`/details/${this.props.shops.id}`)}}>Details</button>
                </div>
             </div>
        </div>
    )
                }
}


export default ShopCard;
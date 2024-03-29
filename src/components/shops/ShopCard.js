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
    console.log("here at card",this.props)
    return (
        <div className="card">
            <div className="card-content">
                <h2> <span className="card-shopname">{
                (this.props.shops.name)}</span></h2>
                <h5><span className="card-address">{
                (this.props.shops.address)}</span></h5>
                <div className="card-picture">
                <img  className="shopsimage" src= {this.props.shops.url} alt="Ramen Shop" />
                </div>
                <div>
                {/* <Link to={`/shops/${this.props.name.id}`}><button className="detailsBtn">Details</button></Link> */}
                <button className="shopCardButton" type="button" onClick={() => {this.props.history.push(`/details/${this.props.shops.id}`)}}>Details</button>
                </div>
             </div>
        </div>
    )
                }
}


export default ShopCard;

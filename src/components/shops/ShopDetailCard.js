import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';

class ShopCard extends Component {

    handleDelete = (id) => {
        APIManager.delete(id)
        .then(() => this.props.getData());
    }

    handleFavorite = () => {
        console.log("handle")
        let newFavorite = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            shopId: this.props.shops.id,
            name: this.props.shops.name,
            address: this.props.shops.address
        }
    APIManager.saveFavorite(newFavorite)
        //post this object to the datbase
        //send the user to the favorites page
    
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
                <button type="button" onClick={() => this.handleFavorite()}>Favorite</button>
                </div>
             </div>
        </div>
    )
                }
}


export default ShopCard;
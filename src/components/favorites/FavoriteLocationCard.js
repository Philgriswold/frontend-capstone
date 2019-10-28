import React, { Component } from 'react'
import { Link } from "react-router-dom";
import APIManager from "../../APIManager"

class FavoriteLocationCard extends Component {
    state = {
        location: {},
    }
   
    handleDelete = (id) => {
        APIManager.deleteFavoriteLocation(id)
        .then(() => this.props.getData());
    }

  render() {
    const activeUser = parseInt(sessionStorage.getItem("credentials"))
    const checkUser = this.props.favoriteLocations.userId === activeUser
    console.log("CHECK DATA", this.props.favoriteLocations);
    return (
      <div>

        <div className="favoriteShopCard">
        <div className="favoriteLocationCardContent">
        <div className="deleteButtonParent">
        <button className="deleteButton" onClick={() => 
          APIManager.deleteFavoriteLocation(this.props.favoriteLocation.id)
          .then(() => {this.props.getFavoriteLocations()})}> 
          </button>
          </div>
          <div className="shopCardText">
          <h4>{this.props.favoriteLocations.name}</h4>
          <p>{this.props.favoriteLocations.address}</p>
          </div>
          <div>
          <Link to={`/shops/${this.props.favoriteLocations.shopId}`}><button className="savedDetailsBtn">Delete</button></Link>
          </div>
      </div>
      </div></div>
    );
        }
}


export default FavoriteLocationCard;
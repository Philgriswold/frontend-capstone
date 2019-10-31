import React, { Component } from 'react'
import { Link } from "react-router-dom";
import APIManager from "../../APIManager"

class FavoriteLocationCard extends Component {
    state = {
        location: {},
        url: {},
        isLoading: true,
    }
   
    handleDelete = (id) => {
        APIManager.deleteFavoriteLocation(this.props.favoriteLocations.id)
        .then(() => this.props.getFavoriteLocationsData());
    }

  render() {
    const activeUser = parseInt(sessionStorage.getItem("credentials"))
    const checkUser = this.props.favoriteLocations.userId === activeUser
    console.log("herro", this.props.favoriteLocations);
    return (
      <div>

        <div className="favoriteShopCard">
        <div className="favoriteLocationCardContent">
        <div className="deleteButtonParent">
        <button className="deleteButton" onClick={this.handleDelete} >x</button>
          </div>
          <div className="shopCardText">
          <h4>{this.props.favoriteLocations.name}</h4>
          <p>{this.props.favoriteLocations.address}</p>
          </div>
          <div className="card-picture">
          {this.state.isLoading === false ?<img  src={this.props.shops.url} alt="Ramen Shop" />:null}
                </div>
          <div>
          {/* <button type="button" onClick={() => this.handleFavorite()}>Favorite</button> */}
          {/* <Link to={`/shops/${this.props.favoriteLocations.shopId}`}><button className="favDeleteButton">Delete</button></Link> */}
          </div>
      </div>
      </div></div>
    );
        }
}


export default FavoriteLocationCard;
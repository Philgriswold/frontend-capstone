import React, { Component } from 'react'
import { Link } from "react-router-dom";
import APIManager from "../../APIManager"

class FavoriteLocationCard extends Component {
    state = {
        location: {},
        url: {},
        isLoading: false,
    }
   
    handleDelete = (id) => {
        APIManager.deleteFavoriteLocation(this.props.favoriteLocations.id)
        .then(() => this.props.getFavoriteLocationsData());
    }
    componentDidMount() {
      APIManager.getMyFavoriteShops(parseInt(sessionStorage.getItem("activeUser")), this.props.favoriteLocations.shopId)
      
          .then((value) => {
            console.log("value", value)
              this.setState({
                url: value[0].shop.url,
                  // reviews: value,
                  // isLoading: false,
              })
            })
          }

  render() {
    console.log("url", this.state)
    const activeUser = parseInt(sessionStorage.getItem("credentials"))
    const checkUser = this.props.favoriteLocations.userId === activeUser
    console.log("herro", this.props.favoriteLocations);
    return (
      <div>

        <div className="favoriteLocationCard">
        <div className="favoriteLocationCardContent">
        <div className="deleteButtonParent">
        <button className="favoriteDeleteButton" onClick={this.handleDelete} >x</button>
          </div>
          <div className="favlocation-name">
          <h2>{this.props.favoriteLocations.name}</h2>
          </div>
          {/* <div className="favlocation-address">
          <p>{this.props.favoriteLocations.address}</p>
          </div> */}
          <div className="favcard-picture">
          {this.state.isLoading === false ?<img className="favcard-img"  src={`../../../${this.state.url}`} alt="Ramen Shop" />:null}
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
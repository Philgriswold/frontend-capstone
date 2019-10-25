import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ShopDetailCard from './ShopDetailCard'
import APIManager from '../../APIManager'
import ShopCard from './ShopCard'

class ShopDetail extends Component {
    state = {
        shop: {},
        name: "",
        address: "",
        category: "",
        description: "",
        id: ""
    }
handleFavorite = () => {
    let newFavorite = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        shopId: this.state.id
    }
    //post this object to the datbase
    //send the user to the favorites page

}

componentDidMount(){
    APIManager.getShopById(this.props.match.params.shopId)
    .then((shop) => {
        this.setState({
            name: shop.name,
            address: shop.address,
            category: shop.category,
            description: shop.description,
            id: shop.id
        })
    })
}

render(){
    console.log("ShopDetail")
    return(
        <>
        <div className="card-detail">
        {this.state.name}
        {this.state.address}
        {this.state.category}
        {this.state.description}
        <div>
       <button type="button" onClick={this.handleFavorite}>Favorite</button>
        </div>
        </div>
        </>
    )
}
}


export default ShopDetail
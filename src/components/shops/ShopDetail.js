import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ShopDetailCard from './ShopDetailCard'
import APIManager from '../../APIManager'
// import ShopDetailCard from './ShopDetailCard'

class ShopDetail extends Component {
    state = {
        shop: {},
        // name: "",
        // address: "",
        // category: "",
        // description: "",
        // id: ""
    }
handleFavorite = () => {
    let newFavorite = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        shopId: this.state.id
    }
    //post this object to the datbase
    //send the user to the favorites page

}

componentDidMount(){
    APIManager.getShopById(this.props.match.params.shopId)
    .then((shop) => {
        console.log(shop)
        this.setState({
            shop: shop
            // name: shop.name,
            // address: shop.address,
            // category: shop.category,
            // description: shop.description,
            // id: shop.id
        })
    })
}

render(){
    console.log("ShopDetail")
    return(
        <>
        <div className="card-detail">
     <ShopDetailCard  shops={this.state.shop} />
        </div>
        </>
    )
}
}


export default ShopDetail
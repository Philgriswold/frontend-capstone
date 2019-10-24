import React, { Component } from 'react'
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
    }


componentDidMount(){
    APIManager.getShopById(this.props.match.params.shopId)
    .then((shop) => {
        this.setState({
            name: shop.name,
            address: shop.address,
            category: shop.category,
            description: shop.description,
        })
    })
}

render(){
    console.log("ShopDetail")
    return(
        <>
        {this.state.name}
        {this.state.address}
        {this.state.category}
        {this.state.description}
        </>
    )
}
}

export default ShopDetail
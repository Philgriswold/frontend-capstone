import React, { Component } from 'react'
import ShopCard from './ShopCard'
import APIManager from '../../APIManager'

class ShopDetail extends Component {
    state = {
        shops: [],
        address: [],
        details: []
    }

componentDidMount(){
    APIManager.getShop()
    .then((shops) => {
        console.log("shops", shops)
        this.setState({
            shops: shops,
            address: address,
            details: details
        })
    })
}

render(){
    return(
        <>
        <h1>HELLO WORLD</h1>
        {this.state.shops.map(shops => (
            <ShopCard
                key={shops.id}
                shops={shops}
                {...this.props}
            />
        ))}
        </>
    )
}
}
export default ShopDetail
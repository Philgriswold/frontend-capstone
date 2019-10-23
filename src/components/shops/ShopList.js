import React, { Component } from 'react'
import ShopCard from './ShopCard'
import APIManager from '../../APIManager'

class ShopList extends Component {
    state = {
        shops: [],
    }


componentDidMount(){
    APIManager.getShop()
    .then((shops) => {
        console.log("shops", shops)
        this.setState({
            shops: shops
        })
    })
}

render(){
    return(
        <>
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
export default ShopList

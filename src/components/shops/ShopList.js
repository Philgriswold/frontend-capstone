import React, { Component } from 'react'
import APIManager from '../../APIManager'
import ShopCard from './ShopCard'


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
    console.log("ShopList: Render")
    return(
        <>
        {this.state.shops.map(shops => 
            <ShopCard
                key={shops.id}
                shops={shops}
                {...this.props}
            />
        )}
        </>
    )
}
}
export default ShopList

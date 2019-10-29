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
        <div className="card-container">
        <>
        {this.state.shops.map(shops => 
            <ShopCard
                key={shops.id}
                shops={shops}
                {...this.props}

            />
        )}
        </>
        </div>
    )
}
}
export default ShopList

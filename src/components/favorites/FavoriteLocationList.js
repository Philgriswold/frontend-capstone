import React, { Component } from 'react'
import FavoriteLocationCard from './FavoriteLocationCard'
import APIManager from '../../APIManager'



class FavoriteLocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteLocations: [],
        };
        // this.getfavoriteLocations = this.getfavoriteLocations.bind(this);
    }

componentDidMount(){
    APIManager.getFavoriteLocations()
    .then((favoriteLocations) => {
        this.setState({
            favoriteLocations: favoriteLocations
        })
        console.log("fav", favoriteLocations)
    })   
}

getFavoriteLocations(){
    APIManager.getAllFavoriteLocations()
    .then((favoriteLocations) => {
        this.setState({
            favoriteLocations: favoriteLocations
        })
    })
}

render(){
    
    return (
        
        <div className="shopCardContainer">
            {this.state.favoriteLocations.map((favoriteLocations, i) => <FavoriteLocationCard 
            key={i}
            favoriteLocations={favoriteLocations}
            getFavoriteLocations={this.getFavoriteLocations}
            {...this.props}
            />)}
        </div> 
            
    ) 
    
}
}

export default FavoriteLocationList
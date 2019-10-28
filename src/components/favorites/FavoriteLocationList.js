import React, { Component } from 'react'
import FavoriteLocationCard from './FavoriteLocationCard'
import APIManager from '../../APIManager'



class FavoriteLocationList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         favoriteLocations: [],
    //     };
    //     // this.getfavoriteLocations = this.getfavoriteLocations.bind(this);
    // }
    state = {
        favoriteLocations: []
    }


componentDidMount(){
    this.getFavoriteLocationsData()
    // APIManager.getFavoriteLocations()
    // .then((favoriteLocations) => {
    //     this.setState({
    //         favoriteLocations: favoriteLocations
    //     })
    //     console.log("fav", favoriteLocations)
    // })   
}

getFavoriteLocationsData = () => {
    APIManager.getFavoriteLocations()
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
            getFavoriteLocationsData={this.getFavoriteLocationsData}
            {...this.props}
            />)}
        </div> 
            
    ) 
    
}
}

export default FavoriteLocationList
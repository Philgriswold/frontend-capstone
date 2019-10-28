import React, { Component } from 'react';
import APIManager from '../../APIManager'

class FavoriteLocation extends Component {

    componentDidMount() {
        APIManager.getAllFavoriteLocations()
            .then(favorited => {
                this.setState({
                    favorited: favorited
                })
            })
    }


    handleFavorite = event => {
        console.log(this.props) 
        event.preventDefault();
        this.setState({ loadingStatus: true });
        const favorited = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            shopId: parseInt(this.props.shopId),
            name: this.props.name,
        }
        APIManager.favoriteLocation(favorited)
    }


    render() {
        return (
            <>
                <button className="" onClick={this.handleFavorite}> Favorite </button>
            </>
        )
    }
}

export default FavoriteLocation
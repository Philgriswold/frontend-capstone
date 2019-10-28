import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';
import ShopReviewCard from '../shops/ShopReviewCard'
import Rating from 'react-rating'
import { Form, TextArea } from 'semantic-ui-react'

class ShopCard extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('' + this.state.value);
        event.preventDefault()
    }
        
       
    handleDelete = (id) => {
        APIManager.delete(id)
            .then(() => this.props.getData());
    }

    handleFavorite = () => {
        console.log("handle")
        let newFavorite = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            shopId: this.props.shops.id,
            name: this.props.shops.name,
            address: this.props.shops.address
        }
        APIManager.saveFavorite(newFavorite)

    }

    render() {
        console.log("here at card", this.props.shops)
        return (
            <div className="card">
                <div className="card-content">
                    <h3> <span className="card-shopname">{
                        (this.props.shops.name)}</span></h3>
                    <h4> <span className="card-address">{
                        (this.props.shops.address)}</span></h4>
                    <h4> <span className="card-category">{
                        (this.props.shops.category)}</span></h4>
                    <h4> <span className="card-description">{
                        (this.props.shops.description)}</span></h4>
                    <div>
                        {/* <Link to={`/shops/${this.props.name.id}`}><button className="detailsBtn">Details</button></Link> */}
                        <button type="button" onClick={() => this.handleFavorite()}>Favorite</button>
                    </div>
                    <br></br>
                    <Rating />
                    <br></br>
                <form onSubmit={this.handleSubmit}>
                    <form>
                        Review
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </form>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
        )
    }
}


export default ShopCard;
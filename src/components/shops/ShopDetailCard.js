import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';
import ShopReviewCard from '../shops/ShopReviewCard'
import Rating from 'react-rating'
import { Form, TextArea } from 'semantic-ui-react'

class ShopCard extends Component {
    state = {
        value: "",
        userId: "",
        shopId: "",
        reviews: [],
        //  review: "",
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    getReviewPage = (shopId) => {
        APIManager.getReview(shopId)
        .then((reviews) => {
            this.setState({
                reviews: reviews
            })
        })
    }


    handleSubmitReview = () => {
        let newReview = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            shopId: this.props.shops.id,
            value: this.state.value
            // review: review
        }
        APIManager.postReview(newReview)
            .then((newReview) => {
                this.setState({
                    newReview: newReview
                }
                )
            }
            )
    }

    handleSubmit = (event) => {
        alert('' + this.state.value);
        event.preventDefault()
    }
    //have the handle submit post stuff to database and have .then that then sets the state
    //and then calls the new card


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
    componentDidMount() {
        console.log("shopId", this.props.shopId)
        APIManager.getReview(this.props.shopId)
            .then((value) => {
                console.log("value", value)
                this.setState({
                    reviews: value
                    // name: shop.name,
                    // address: shop.address,
                    // category: shop.category,
                    // description: shop.description,
                    // id: shop.id
                })
            })
    }
    //component did mount get get all reviews based on shopId
    //import reviewCard here make a card for each...
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
                    {/* <div className="card-picture">
                    <img  src={require(`${this.props.shops.url}`)} alt="Ramen Shop" />
                    </div> */}
                    <h4> <span className="card-description">{
                        (this.props.shops.description)}</span></h4>
                    <div>
                        {/* <Link to={`/shops/${this.props.name.id}`}><button className="detailsBtn">Details</button></Link> */}
                        <button type="button" onClick={() => this.handleFavorite()}>Favorite</button>
                    </div>
                    <br></br>
                    {/* <Rating /> */}
                    <br></br>
                    <form onSubmit={this.handleSubmitReview}>
                        <form>
                            Review
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </form>
                        <input type="submit" value="Submit" />
                    </form>
                    <div className="review-card">
                        {this.state.reviews.map(review =>
                            <ShopReviewCard
                                key={review.id}
                                review={review}
                                getReviewPage={this.getReviewPage}
                                shopId={this.props.shopId}
                                {...this.props}

                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopCard;
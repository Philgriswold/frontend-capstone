import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';
import ShopReviewCard from '../shops/ShopReviewCard'
import Rating from 'react-rating'
import { Form, TextArea } from 'semantic-ui-react'

class ShopDetailCard extends Component {
    state = {
        value: "",
        userId: "",
        shopId: "",
        reviews: [],
        isEdit: false,
        editId: null,
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

    handleEdit = (review, id) => {
        console.log("click", this.handleEdit)
        this.setState({
            value: review,
            isEdit: true,
            editId: id
        })

    }


    handleSubmitReview = () => {
        let newReview = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            shopId: this.props.shops.id,
            value: this.state.value
            // review: review
        }

        //IF state for edit mode 
        if (this.state.isEdit) {
            console.log("EDIT MORE: ", this.state.value, this.state.editId);
            APIManager.editReview(newReview, this.state.editId)
            .then((response) => {
                console.log("RESPONSE: ", response);
            })
            this.setState({ 
                isEdit: false,
                value: "",
            })

        } else {
             APIManager.postReview(newReview)
            .then((newReview) => {
                this.setState({
                  newReview: newReview
                })
            })
        }
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
        console.log("<---------------------------->", this.props);
        return (
            <div className="card">
                <div className="card-content">
                    <h3> <span className="card-shopname">{
                        (this.props.shops.name)}</span></h3>
                    <h4><italic><span className="card-address">{
                        (this.props.shops.address)}</span></italic></h4>
                    <h4> <span className="card-category">Style: {
                        (this.props.shops.category)}</span></h4>
                    {/* <div className="card-picture">
                    <img  src={require(`${this.props.shops.url}`)} alt="Ramen Shop" />
                    </div> */}
                    <h5> <span className="card-description">{
                        (this.props.shops.description)}</span></h5>
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
                                handleEdit={this.handleEdit}
                                key={review.id}
                                review={review}
                                reviewId={review.id}
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

export default ShopDetailCard;
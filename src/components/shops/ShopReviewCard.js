import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';
import Rating from 'react-rating'
import { Form, TextArea } from 'semantic-ui-react'

class ShopReviewCard extends Component {
    state = {
        value: [],
        myReview: '',
    }

    componentDidMount() {
        if (
            parseInt(sessionStorage.getItem('activeUser')) ===
            this.props.review.userId
        ) {
            this.setState({
                myReview: false
            });
        } else {
            this.setState(
                {
                    myReview: true
                },
            );
        }
    }

    handleDelete = (id) => {
        APIManager.deleteReview(id)
            .then(() => this.props.getReviewPage(this.props.shopId));
    }

    render() {
        console.log("REVIEW CHECK", this.props.review);
        return (
            <>
                {this.state.myReview ? (<div className="reviewCard">
                    <h3>
                        {this.props.review.value}</h3></div>

                ) : (<div className="reviewCard">
                    <h3>
                        {this.props.review.value}</h3>
                    <button className="deleteButton" onClick={() => this.handleDelete(this.props.reviewId)}>Delete</button>
                    <button type="editButton" onClick={() => { this.props.handleEdit(this.props.review.value, this.props.reviewId) }}>Edit</button>
                </div>
                    )}
            </>
        )
    }
}

export default ShopReviewCard


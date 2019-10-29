import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';
import Rating from 'react-rating'
import { Form, TextArea } from 'semantic-ui-react'

class ShopReviewCard extends Component {
    state = {
        value: [],
    }

    
    handleDelete = (id) => {
        APIManager.deleteReview(id)
            .then(() => this.props.getReviewPage(this.props.shopId));
    }

    render() {
        return (
            <>
                <div className="reviewCard">
                    <h3>
                        {this.props.review.value}</h3>
                        <button className="deleteButton" onClick={() => this.handleDelete(this.props.review.id)}>Delete</button>
                        <button className="editButton">Edit</button>
                </div>
            </>
        )
    }
}

export default ShopReviewCard


import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';
import Rating from 'react-rating'
import { Form, TextArea } from 'semantic-ui-react'

class ShopReviewCard extends Component {
    // state = {
    //     value: [],
    //     userId: userId,
    //     shopId: shopId,
    // }




    render() {
        return (
            <>
                <div className="reviewCard">
                    <h3>
                        {this.props.review.value}</h3>
                </div>
            </>
        )
    }
}

export default ShopReviewCard


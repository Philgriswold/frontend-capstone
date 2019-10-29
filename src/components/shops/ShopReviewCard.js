// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// // import { firstLetterCase } from '../../modules/helpers'
// import APIManager from '../../APIManager';
// import Rating from 'react-rating'
// import { Form, TextArea } from 'semantic-ui-react'

// class ShopReviewCard extends Components {
//     state = {
//         value: [],
//         userId: userId,
//         shopId: shopId,
//     }

//     handleFieldChange = evt => {
//         const stateToChange = {};
//         stateToChange[evt.target.id] = evt.target.value;
//         this.setState(stateToChange);
//     };

//     handleGetReview = () => {
//         let newReview = {
//             userId: parseInt(sessionStorage.getItem("activeUser")),
//             shopId: this.props.shops.id,
//             value: this.state.value
//         }

//     componentDidMount() {
//         APIManager.getReview(value)
//             .then((value) => {
//                 this.setState({
//                     value: value
//                 })
//             })
//     }
        
    
// render() {
//     return (
//         <>
//         <div className="card">
//             <h3> <span className="card-shopname">{
//                 (this.props.shops.value)}</span></h3>
//         </div>
//         </>
//     )
// }
// }

// export default ShopReviewCard


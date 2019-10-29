// import React, { Component } from "react"
// import APIManager from "../../APIManager"

// class ShopReviewCard extends Component {
//     state = {
//         shops: "",
//         userId: "",
//         shopId: "",
//         reviews: [],
//     };

//     handleFieldChange = evt => {
//         const stateToChange = {}
//         stateToChange[evt.target.id] = evt.target.value
//         this.setState(stateToChange)
//     }

//     updateShop = evt => {
//         evt.preventDefault()
//         this.setState({ loadingStatus: true });
//         const editedShop = {
//             id: this.props.shopId,
//         };
        
//         APIManager.editReview()
//           .then(() => this.props.getData())
//     }
//     componentDidMount() {
//         APIManager.getShopById()
//           .then(place => {
//               this.setState({
//                   shopId: shopId
//                    });
//               });
//           }
//     render() {
//         return (
//             <>
//                 <form>
//                     <fieldset>

                    
//                     </fieldset>
//                 </form>
//             </>
//         );
//     }
// }

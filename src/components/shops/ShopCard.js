import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import { firstLetterCase } from '../../modules/helpers'
import APIManager from '../../APIManager';

class ShopCard extends Component {

    handleDelete = (id) => {
        APIManager.delete(id)
        .then(() => this.props.getData());
    }
render() {
    return (
        <div className="card">
            <div className="card-content">
                <h3> <span className="card-shopname">{
                (this.props.shops.name)}</span></h3>
                <h4> <span className="card-address">{
                (this.props.shops.address)}</span></h4>
                <button className="detail button">Details</button>
                {/* <Link to={`/recipes/${this.props.region.id}`}><button
                        className="ui icon button"
                    ><i aria-hidden="true" className="explore icon"></i>
                        Explore
							</button></Link> */}
             </div>
        </div>
      )
}

}

export default ShopCard;

import React, { Component } from 'react';
import {Link, withRouter } from "react-router-dom"

class NavBar extends Component {

    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/login');
    }

  render(){
    console.log("something", this.props)
    return (
      <header>
        <h1 className="site-title">Ramen Site</h1>
        <nav>
          <ul className="container">
             <>
                <li><Link className="nav-link" to="/shops">Shops</Link></li>
                <li><Link className="nav-link" to="/favorites">Favorites</Link></li>
                {/* <li><button className="nav-link" onClick={this.handleLogout}>Logout</button></li> */}
                {/* <li><button size='small' onClick={this.handleLogout}>Logout</button></li> */}
                <li><Link className="nav-link" onClick={this.handleLogout}>Logout</Link></li>
            </>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;
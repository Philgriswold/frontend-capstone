import React, { Component } from 'react';
import {Link, withRouter } from "react-router-dom"

class NavBar extends Component {

    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/');
    }

  render(){
    return (
      <header>
        <h1 className="site-title">Ramen Site</h1>
        <nav>
          <ul className="container">
             <>
                <li><Link className="nav-link" to="/shops">Shops</Link></li>
                <li><Link className="nav-link" to="/favorites">Favorites</Link></li>
                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
            </>
            }
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;
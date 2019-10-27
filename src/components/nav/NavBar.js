import React, { Component } from 'react';
import {Link, withRouter } from "react-router-dom"
import { Nav } from "react-bootstrap"
import './NavBar.css'

class NavBar extends Component {

    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/login');
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
//   render() {
//     console.log("something", this.props)
//     return (
       
//        <Nav justify variant="tabs" defaultActiveKey="/shops">
//            <Nav.Item>
//                 <Nav.Link href="/shops">Shops</Nav.Link>
//            </Nav.Item>
//            <Nav.Item>
//                  <Nav.Link href="/favorites">Favorites</Nav.Link>
//            </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
//             </Nav.Item>
//         </Nav>
//     )
//    }

// }

export default withRouter(NavBar);
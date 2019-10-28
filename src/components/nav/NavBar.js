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
            <h1 className="site-title">The Ramenator</h1>
            <h2 className="site-jptitle"><strong>ザー・ラーメンアートー</strong></h2>
            <nav>
              <ul className="container">
                 <>
                    <li><Link className="nav-link" to="/shops"><strong>ショプス</strong></Link></li>
                    <li><Link className="nav-link" to="/favorites"><strong>フェーボリッツ</strong></Link></li>
                    <li><span className="nav-link" onClick={this.handleLogout}><strong>ロガウト</strong></span></li>
                </>
                
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
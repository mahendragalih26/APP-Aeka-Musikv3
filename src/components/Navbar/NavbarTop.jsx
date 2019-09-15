import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavbarTop extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <Navbar style={{ backgroundColor: "#F5D372" }} variant="dark">
          <a href="/">
            <img
              alt=""
              src="/assets/icon1.png"
              // width="140px"
              // height="50px"
              className="d-inline-block align-top"
            />
          </a>

          <Navbar.Brand href="#home"></Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* Signed in as: <a href="#login">Mark Otto</a> */}
              <Nav.Link onClick={this.loginShow} className="ml-1">
                <i className="fa fa-user"></i>{" "}
                <span style={{ fontSize: 18 }}>&nbsp;Login</span>
              </Nav.Link>
            </Navbar.Text>
            <Navbar.Text>
              <Nav.Link
                onClick={this.openNav}
                onMouseOver={this.loginClose}
                className="ml-4"
              >
                <i className="fa fa-heart"></i>
                <span style={{ fontSize: 18 }}>&nbsp;&nbsp;Wishlist</span>
              </Nav.Link>
            </Navbar.Text>
            <Navbar.Text>
              <Nav.Link
                onClick={this.openNav}
                onMouseOver={this.loginClose}
                className="ml-4"
              >
                <i className="fa fa-shopping-cart"></i>
                <span style={{ fontSize: 18 }}>&nbsp;&nbsp;Cart</span>
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarTop;

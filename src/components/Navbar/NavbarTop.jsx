import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Row,
  Container,
  Col,
  Image,
  Button,
  ButtonGroup,
  FormControl
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginModal from "../Modal/mLogin";
import SearchBar from "../SearchBar";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

class NavbarTop extends Component {
  constructor() {
    super();
    this.state = {
      openLogin: false,
      openCart: false
    };
  }

  openModalLogin() {
    this.setState({ openLogin: true });
  }

  render() {
    console.log("state", this.state.openLogin);
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
          <Navbar.Collapse>
            <SearchBar />
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link
                onClick={this.openNav}
                onMouseOver={this.loginClose}
                className="ml-1"
              >
                <i className="fa fa-heart" style={{ fontSize: "20px" }}></i>
                {/* <span style={{ fontSize: 18 }}>&nbsp;&nbsp;Wishlist</span> */}
              </Nav.Link>
            </Navbar.Text>
            <Navbar.Text>
              <Nav.Link
                onClick={() => this.setState({ openCart: true })}
                className="ml-1"
              >
                <i
                  className="fa fa-shopping-cart"
                  style={{ fontSize: "25px" }}
                ></i>
                {/* <span style={{ fontSize: 18 }}>&nbsp;&nbsp;Cart</span> */}
              </Nav.Link>
            </Navbar.Text>
            <Navbar.Text>
              {/* Signed in as: <a href="#login">Mark Otto</a> */}
              <Nav.Link onClick={() => this.openModalLogin()} className="ml-1">
                <i className="fa fa-user" style={{ fontSize: "25px" }}></i>{" "}
                {/* <span style={{ fontSize: "25px" }}>&nbsp;Login</span> */}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <LoginModal
          open={this.state.openLogin}
          hide={() => this.setState({ openLogin: false })}
        />
        <SlidingPane
          closeIcon={
            <div>
              <i
                className="fa fa-chevron-right"
                style={{ fontSize: "25px" }}
              ></i>
            </div>
          }
          isOpen={this.state.openCart}
          title="My Cart ..."
          from="right"
          width="370px"
          onRequestClose={() => this.setState({ openCart: false })}
        >
          <div>
            <Container>
              <Row style={{ marginBottom: "10px" }}>
                <Col md={4} xs={6}>
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0256/2398/6281/products/2_25_180x.jpg?v=1568098039"
                    rounded
                    style={{ width: "105px", height: "105px" }}
                  />
                </Col>
                <Col md={7}>
                  <div style={{ marginBottom: "5px" }}>
                    <Link
                      to="#"
                      style={{
                        textDecoration: "none",
                        color: "#0f3142",
                        fontSize: "15px"
                      }}
                    >
                      Snapback Hat Gundala
                    </Link>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <span>Rp. 199.000</span>
                  </div>

                  <div>
                    <ButtonGroup className="mr-2" aria-label="First group">
                      <Button variant="secondary">-</Button>
                      <FormControl
                        type="text"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon"
                      />
                      <Button variant="secondary">+</Button>
                    </ButtonGroup>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col md={4} xs={6}>
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0256/2398/6281/products/2_25_180x.jpg?v=1568098039"
                    rounded
                    style={{ width: "105px", height: "105px" }}
                  />
                </Col>
                <Col md={7}>
                  <div style={{ marginBottom: "5px" }}>
                    <Link
                      to="#"
                      style={{
                        textDecoration: "none",
                        color: "#0f3142",
                        fontSize: "15px"
                      }}
                    >
                      Snapback Hat Gundala
                    </Link>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <span>Rp. 199.000</span>
                  </div>

                  <div>
                    <ButtonGroup className="mr-2" aria-label="First group">
                      <Button variant="secondary">-</Button>
                      <FormControl
                        type="text"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon"
                      />
                      <Button variant="secondary">+</Button>
                    </ButtonGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </SlidingPane>
      </React.Fragment>
    );
  }
}

export default NavbarTop;

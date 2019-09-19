import React, { Component, Fragment } from "react";
import {
  Navbar,
  Nav,
  Row,
  Container,
  Col,
  Image,
  Button,
  ButtonGroup,
  FormControl,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SweetAlert from "sweetalert2";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { connect } from "react-redux";

import SearchBar from "../SearchBar";
import LoginModal from "../Modal/mLogin";
import ModalLogout from "../Modal/modalLogout.jsx";

import { getCart, getCartDetail } from "../../Publics/Action/cart";

class NavbarTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLogin: false,
      openLogout: false,
      openCart: false,
      dataCart: [],
      role: localStorage.getItem("level") === "admin",
      status_user: localStorage.getItem("token") !== null
    };
  }

  componentDidMount = async () => {
    const id_user = localStorage.getItem("id");
    if (id_user !== null) {
      await this.props.dispatch(getCartDetail(id_user));
    }
    // await this.props.dispatch(getCart());
    this.setState({
      dataCart: this.props.cartDetail
    });
  };

  logoutUser() {
    localStorage.clear();
    SweetAlert.fire({
      title: "Yeayy!",
      text: `User Berhasil Logout`,
      type: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#E28935"
    }).then(() => {
      window.location.reload();
    });
  }

  openModalLogin() {
    this.setState({ openLogin: true });
  }

  openLogout() {
    this.setState({ openLogout: true });
  }

  render() {
    console.log("state", this.state.openLogout);
    console.log("state cart", this.props.cartDetail);
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
            {this.state.status_user ? (
              <Fragment>
                {this.state.role ? (
                  <Fragment>
                    <Navbar.Text>
                      {this.state.status_user ? (
                        <Nav.Link
                          onClick={() => this.openLogout()}
                          className="ml-1"
                        >
                          <OverlayTrigger
                            placement={"bottom"}
                            overlay={
                              <Tooltip id={`tooltip-bottom`}>
                                Admin <strong>LogOut</strong> ?
                              </Tooltip>
                            }
                          >
                            <i
                              className="fa fa-user"
                              style={{ fontSize: "31px" }}
                            ></i>
                          </OverlayTrigger>
                        </Nav.Link>
                      ) : (
                        <Nav.Link
                          onClick={() => this.openModalLogin()}
                          className="ml-1"
                        >
                          <OverlayTrigger
                            placement={"bottom"}
                            overlay={
                              <Tooltip id={`tooltip-bottom`}>
                                <strong>LogIn</strong> and get more.
                              </Tooltip>
                            }
                          >
                            <i
                              className="fa fa-user"
                              style={{ fontSize: "31px" }}
                            ></i>
                          </OverlayTrigger>
                        </Nav.Link>
                      )}
                    </Navbar.Text>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Navbar.Text>
                      <Nav.Link href="/wishlist" className="ml-1">
                        <OverlayTrigger
                          placement={"bottom"}
                          overlay={
                            <Tooltip id={`tooltip-bottom`}>
                              My <strong>Wishlist Product</strong>.
                            </Tooltip>
                          }
                        >
                          <i
                            className="fa fa-heart"
                            style={{ fontSize: "31px" }}
                          ></i>
                        </OverlayTrigger>

                        {/* <span style={{ fontSize: 18 }}>&nbsp;&nbsp;Wishlist</span> */}
                      </Nav.Link>
                    </Navbar.Text>
                    <Navbar.Text>
                      <Nav.Link
                        onClick={() => this.setState({ openCart: true })}
                        className="ml-1"
                        to="/wishlist"
                      >
                        {/* <span style={{ fontSize: 18 }}>&nbsp;&nbsp;Cart</span> */}

                        <OverlayTrigger
                          placement={"bottom"}
                          overlay={
                            <Tooltip id={`tooltip-bottom`}>
                              Your <strong>Cart Product</strong>.
                            </Tooltip>
                          }
                        >
                          <i
                            className="fa fa-cart-arrow-down"
                            style={{ fontSize: "31px" }}
                          ></i>
                        </OverlayTrigger>
                      </Nav.Link>
                    </Navbar.Text>
                    <Navbar.Text>
                      {this.state.status_user ? (
                        <Nav.Link
                          onClick={() => this.openLogout()}
                          className="ml-1"
                        >
                          <OverlayTrigger
                            placement={"bottom"}
                            overlay={
                              <Tooltip id={`tooltip-bottom`}>
                                <strong>Logout</strong>.
                              </Tooltip>
                            }
                          >
                            <i
                              className="fa fa-user"
                              style={{ fontSize: "31px" }}
                            ></i>
                          </OverlayTrigger>
                        </Nav.Link>
                      ) : (
                        <Nav.Link
                          onClick={() => this.openModalLogin()}
                          className="ml-1"
                        >
                          <OverlayTrigger
                            placement={"bottom"}
                            overlay={
                              <Tooltip id={`tooltip-bottom`}>
                                <strong>LogIn</strong> and get more.
                              </Tooltip>
                            }
                          >
                            <i
                              className="fa fa-user"
                              style={{ fontSize: "31px" }}
                            ></i>
                          </OverlayTrigger>
                        </Nav.Link>
                      )}
                    </Navbar.Text>
                  </Fragment>
                )}
              </Fragment>
            ) : (
              <Fragment>
                <Nav.Link
                  onClick={() => this.openModalLogin()}
                  className="ml-1"
                  style={{ color: "white" }}
                >
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-bottom`}>
                        <strong>LogIn</strong> and get more.
                      </Tooltip>
                    }
                  >
                    <i className="fa fa-user" style={{ fontSize: "31px" }}></i>
                  </OverlayTrigger>
                </Nav.Link>
              </Fragment>
            )}
          </Navbar.Collapse>
        </Navbar>

        {/* Modal Login */}
        <LoginModal
          open={this.state.openLogin}
          hide={() => this.setState({ openLogin: false })}
        />

        {/* Modal Logout */}
        <ModalLogout
          open={this.state.openLogout}
          logoutData={this.logoutUser}
          hide={() => this.setState({ openLogout: false })}
        />

        {/* Content Cart */}

        {this.state.role ? (
          <div></div>
        ) : (
          <Fragment>
            <SlidingPane
              closeIcon={
                <div>
                  <i
                    className="fa fa-chevron-right"
                    style={{ fontSize: "31px" }}
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
                    {this.state.dataCart.length > 0 ? (
                      this.state.dataCart.map(cart => (
                        <Fragment>
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
                                {cart.name}
                              </Link>
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                              <span>Rp. {cart.price}</span>
                            </div>

                            <div>
                              <ButtonGroup
                                className="mr-2"
                                aria-label="First group"
                              >
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
                          <Col md={12}>
                            <div className="mt-3"></div>
                          </Col>
                        </Fragment>
                      ))
                    ) : (
                      <div>
                        <h4>Data Not Found</h4>
                      </div>
                    )}
                  </Row>
                </Container>
              </div>
            </SlidingPane>
          </Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.Cart.cartList,
    cartDetail: state.Cart.cartDetail
  };
};

export default connect(mapStateToProps)(NavbarTop);

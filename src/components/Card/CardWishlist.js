import React, { Component, Fragment } from "react";
import { Row, Button, Container, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getWishlist } from "../../Publics/Action/wishlist";
import Header from "../Navbar/NavbarTop";
import Footer from "../Navbar/NavbarBot";

class cardWishlist extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      dataWishlist: [],
      role: localStorage.getItem("level") === "admin",
      status_user: localStorage.getItem("token") !== null
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getWishlist());
    this.setState({ myWishlist: this.props.dataWishlist });
  };

  render() {
    console.log("data wishlist", this.props.dataWishlist);
    return (
      <Fragment>
        <Header />
        <Container
          className="justify-content-md-center"
          style={{ maxWidth: "95%" }}
        >
          {this.state.status_user ? (
            <Fragment>
              {this.state.role ? (
                <Row>
                  <Button
                    variant="warning"
                    className="mb-3"
                    style={{
                      marginLeft: "15px",
                      width: "99px",
                      backgroundColor: "rgb(241, 121, 19)",
                      color: "white"
                    }}
                    // onClick={() => this.openModalAdd(true)}
                  >
                    Add
                  </Button>
                </Row>
              ) : (
                <Row>
                  <div className="mt-3">
                    <h3>My Wishlist</h3>
                  </div>
                </Row>
              )}
            </Fragment>
          ) : (
            <div className="mt-3"></div>
          )}

          {/* Main CARD */}
          <Row>
            {this.props.dataWishlist.length > 0 ? (
              this.props.dataWishlist.map(wishlist => (
                <Col
                  md="3"
                  className="mb-3"
                  style={{ width: "320px", height: "297px" }}
                  key={wishlist.id}
                >
                  <Link
                    to={`/detail/${wishlist.id_product}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Card
                      style={{
                        borderRadius: "30px",
                        backgroundColor: "#F5D372",
                        height: "297px"
                      }}
                    >
                      <Card.Body>
                        <Card.Img
                          variant="top"
                          // src={`/assets/sub/Violin`}
                          src={`/assets/${wishlist.img}.png`}
                          // src="/assets/violin.png"
                        />
                      </Card.Body>
                      <Card.Text align="center">
                        <Card.Title>{wishlist.name}</Card.Title>
                      </Card.Text>
                    </Card>
                  </Link>
                </Col>
              ))
            ) : (
              <tr>
                <td colSpan={3}>Data Not Found</td>
              </tr>
            )}
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataWishlist: state.Wishlist.wishlistList
  };
};

export default connect(mapStateToProps)(cardWishlist);

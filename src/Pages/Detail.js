import React, { Component, Fragment } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  Button
} from "react-bootstrap";
import SweetAlert from "sweetalert2";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getCategory } from "../Publics/Action/category";
import { getProductsDetail, deleteProduct } from "../Publics/Action/product";
import {
  addWishlist,
  deleteWishlist,
  getWishlistDetail
} from "../Publics/Action/wishlist";
import { getBranch } from "../Publics/Action/branch";
import ModalEdit from "../components/Modal/modalEdit";
import ModalDelete from "../components/Modal/modalDelete";

import NavbarTop from "../components/Navbar/NavbarTop";
import NavbarBot from "../components/Navbar/NavbarBot";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_detail: this.props.match.params.id,
      openModalEdit: false,
      ModalDelete: false,
      dataProduct: [],
      dataMatch: "",
      dataCategory: [],
      dataBranch: [],
      isWishList: false,
      role: localStorage.getItem("level") === "user"
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
    await this.props.dispatch(getProductsDetail(this.state.id_detail));
    await this.props.dispatch(getWishlistDetail(this.state.id_detail));
    await this.props.dispatch(getBranch());
    this.setState(
      {
        dataMatch: this.props.dataWishlist,
        dataProduct: this.props.data.Products.productsList[0],
        dataCategory: this.props.data.Categorys.categoryList,
        dataBranch: this.props.data.Branches.branchList
      },

      () => {
        console.log("statenya", this.state);
        if (this.state.dataMatch.id_product == this.state.id_detail) {
          this.setState({ isWishList: true });
        }
      }
    );
  };

  // Big Function

  DeleteMain = async () => {
    await this.props.dispatch(deleteProduct(this.state.id_detail));
    SweetAlert.fire({
      title: "Yeayy!",
      text: `Data has been updated`,
      type: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#E28935"
    }).then(() => {
      setTimeout(() => {
        this.props.history.push(`/${this.state.dataProduct.category}`);
      }, 3000);
    });
    // setTimeout(() => {
    //   this.props.history.push(`/${this.state.dataStore.category}`);
    // }, 3000);
  };

  handleWishAdd = (id_user, id_product) => {
    const NewData = {
      id_user,
      id_product
    };
    this.props.dispatch(addWishlist(NewData)).then(() => {
      this.setState({ isWishList: true });
    });
  };

  handleWishRemove = () => {
    this.props.dispatch(deleteWishlist(this.state.dataMatch.id)).then(() => {
      this.setState({ isWishList: false });
    });
  };

  // Low Function
  openModalEdit() {
    this.setState({ openModalEdit: true });
  }

  openModalDelete() {
    this.setState({ ModalDelete: true });
  }

  render() {
    const { dataProduct } = this.state;
    const { dataWishlist } = this.props;
    const { dataCategory } = this.state;
    const { dataBranch } = this.state;
    console.log("state deletemodal", this.state.openModalDelete);
    console.log("localstorage = ", localStorage.getItem("name"));

    // const [modalShowDelete, setModalDelete] = React.useState(false);
    // console.log("data API = ", dataWishlist);
    console.log("data API wishkash= ", dataWishlist);
    return (
      <React.Fragment>
        <NavbarTop />
        <Container key={dataProduct.id} className="mt-4">
          <Row>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`/assets/${dataProduct.img}.png`}
                />
              </Card>
            </Col>
            <Col xs={6} md={8}>
              <Navbar>
                <h2 href="#home">{dataProduct.name}</h2>
                <Nav className="mr-auto"></Nav>

                {this.state.role ? (
                  <Fragment>
                    <span
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        color: "#007bff",
                        marginRight: "20px"
                      }}
                    >
                      <i className="fa fa-cart-plus"></i> Add to Cart
                    </span>
                    {this.state.isWishList ? (
                      <span
                        style={{
                          cursor: "pointer",
                          fontSize: "20px",
                          color: "red"
                        }}
                        onClick={() => this.handleWishRemove()}
                      >
                        <i className="fa fa-heart"></i> Wishlist
                      </span>
                    ) : (
                      <span
                        style={{
                          cursor: "pointer",
                          fontSize: "20px",
                          color: "red"
                        }}
                        onClick={() =>
                          this.handleWishAdd(1, this.state.id_detail)
                        }
                      >
                        <i className="fa fa-heart-o"></i> Wishlist
                      </span>
                    )}
                  </Fragment>
                ) : (
                  <Form inline>
                    <div>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mr-sm-2"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() => this.openModalEdit(this.state.id_detail)}
                      >
                        Edit Data
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="danger"
                        size="sm"
                        className="mr-sm-2"
                        data-toggle="modal"
                        data-target="#ModalDelete"
                        onClick={() => this.openModalDelete()}
                      >
                        Delete
                      </Button>
                    </div>
                  </Form>
                )}

                {/* <Form inline>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mr-sm-2"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => this.openModalEdit(this.state.id_detail)}
                    >
                      Edit Data
                    </Button>
                  </div>
                  <div>
                   
                    <Button
                      variant="danger"
                      size="sm"
                      className="mr-sm-2"
                      data-toggle="modal"
                      data-target="#ModalDelete"
                      onClick={() => this.openModalDelete()}
                    >
                      Delete
                    </Button>
                  </div>
                </Form> */}
              </Navbar>
              <p>{dataProduct.description}</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={8}>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Available In
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      width="20px"
                      type="text"
                      style={{ borderRadius: "14px" }}
                      value={dataProduct.branch}
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Quantitiy
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      width="20px"
                      type="text"
                      style={{ borderRadius: "14px" }}
                      value={dataProduct.stock}
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Price
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      width="20px"
                      type="text"
                      style={{ borderRadius: "14px" }}
                      value={dataProduct.price}
                      readOnly
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={6} md={1}></Col>
          </Row>
        </Container>
        <ModalEdit
          id_main={dataProduct.id_detail}
          dataProduct={dataProduct}
          key={dataProduct}
          dataCategory={dataCategory}
          dataBranch={dataBranch}
          open={this.state.openModalEdit}
          history={this.props.history}
          hide={() => this.setState({ openModalEdit: false })}
        />

        <ModalDelete
          deleteData={this.DeleteMain}
          open={this.state.ModalDelete}
          history={this.props.history}
          hide={() => this.setState({ ModalDelete: false })}
        />
        <NavbarBot />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
    dataWishlist: state.Wishlist.wishlistDetail
  };
};

export default connect(mapStateToProps)(Detail);

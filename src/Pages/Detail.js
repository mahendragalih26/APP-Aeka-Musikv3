import React, { Component } from "react";
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
// import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getCategory } from "../Publics/Action/category";
import { getProductsDetail, deleteProduct } from "../Publics/Action/product";
import { getBranch } from "../Publics/Action/branch";
import ModalEdit from "../components/Modal/modalEdit";
import ModalDelete from "../components/Modal/modalDelete";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_detail: this.props.match.params.id,
      openModalEdit: false,
      ModalDelete: false,
      dataProduct: [],
      dataCategory: [],
      dataBranch: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
    await this.props.dispatch(getProductsDetail(this.state.id_detail));
    await this.props.dispatch(getBranch());
    this.setState({
      dataProduct: this.props.data.Products.productsList[0],
      dataCategory: this.props.data.Categorys.categoryList,
      dataBranch: this.props.data.Branches.branchList
    });
  };

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

  openModalEdit() {
    this.setState({ openModalEdit: true });
  }

  openModalDelete() {
    this.setState({ ModalDelete: true });
  }

  render() {
    const { dataProduct } = this.state;
    const { dataCategory } = this.state;
    const { dataBranch } = this.state;
    console.log("state deletemodal", this.state.openModalDelete);

    // const [modalShowDelete, setModalDelete] = React.useState(false);
    console.log("data API = ", dataProduct);
    return (
      <React.Fragment>
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
                <Navbar.Brand href="#home">{dataProduct.name}</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
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
                    {/* <a href="/violin" onClick={() => this.openModalDelete()}> */}
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
                    {/* </a> */}
                  </div>
                </Form>
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Detail);

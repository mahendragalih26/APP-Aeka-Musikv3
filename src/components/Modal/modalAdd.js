import React, { Component } from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import SweetAlert from "sweetalert2";

import { addProduct } from "../../Publics/Action/product";
// import Axios from "axios";

import { connect } from "react-redux";

class modalAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formMain: {
        name: "",
        price: "",
        stock: "",
        id_branch: "",
        id_category: "",
        img: "/sub/violin"
      },
      dataProduct: [],
      resModal: false
    };
  }

  handleChange = async e => {
    let newFormMain = { ...this.state.formMain };
    const target = e.target;
    const name = target.name;
    const value = target.value;
    newFormMain[name] = value;
    await this.setState({
      formMain: newFormMain
    });
    console.log(this.state.formMain);
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.dispatch(addProduct(this.state.formMain));
    SweetAlert.fire({
      title: "Yeayy!",
      text: `Data has been updated`,
      type: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#E28935"
    }).then(() => {
      window.location.reload();
    });
  };

  getIdProduct = () => {};

  render() {
    console.log("Data Form Main : ", this.state.formMain);
    console.log("Data Form Product : ", this.state.formProduct);
    console.log("Data Form id : ", this.state.id_product);
    return (
      <Modal
        size="lg"
        show={this.props.open}
        onHide={this.props.hide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Add Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Product Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  as="select"
                  name="id_category"
                  onChange={this.handleChange}
                >
                  <option selected disabled>
                    Category..
                  </option>
                  {this.props.dataCategory.length > 0 ? (
                    this.props.dataCategory.map(category => (
                      <option value={category.id}>{category.name}</option>
                    ))
                  ) : (
                    <h1>Not Found Mamank</h1>
                  )}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Branch
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  as="select"
                  name="id_branch"
                  onChange={this.handleChange}
                >
                  <option selected disabled>
                    Branch..
                  </option>
                  {this.props.dataBranch.length > 0 ? (
                    this.props.dataBranch.map(branch => (
                      <option value={branch.id}>{branch.name}</option>
                    ))
                  ) : (
                    <h1>Not Found Mamank</h1>
                  )}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Qty
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  type="text"
                  name="stock"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  type="text"
                  name="price"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                description
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="textarea"
                  rows="5"
                  name="description"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer style={{ borderTop: "none" }}>
            <Button
              variant="warning"
              style={{
                width: "99px",
                backgroundColor: "rgb(241, 121, 19)",
                color: "white"
              }}
              type="submit"
            >
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addProduct: data => {
//       dispatch(addProduct(data));
//     },
//     deleteProduct: data => {
//       dispatch(addProduct(data));
//     }
//   };
// };

const mapStateToProps = state => {
  return {
    dataProduct: state.Products.productsList
  };
};

export default connect(mapStateToProps)(modalAdd);
// (
//   // mapStateToProps,
//   mapDispatchToProps
// )

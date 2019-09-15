import React, { Component } from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import { editProduct } from "../../Publics/Action/product";
import SweetAlert from "sweetalert2";

import { connect } from "react-redux";

class modalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        price: props.dataProduct.price,
        name: props.dataProduct.name,
        description: props.dataProduct.description,
        stock: props.dataProduct.stock,
        id_branch: props.dataProduct.id_branch,
        id_category: props.dataProduct.id_category,
        MyImage: "/sub/violin"
      },
      dataProduct: [],
      resModal: false
    };
    console.log("statasasa", props.dataProduct.price);
  }

  handleChange = async e => {
    let newFormData = { ...this.state.formData };
    const target = e.target;
    const name = target.name;
    const value = target.value;
    newFormData[name] = value;
    await this.setState({
      formData: newFormData
    });
    console.log(this.state.formData);
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.dispatch(
      editProduct(this.props.dataProduct.id, this.state.formData)
    );

    SweetAlert.fire({
      title: "Yeayy!",
      text: `Data has been updated`,
      type: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#E28935"
    }).then(() => {
      window.location.href = `/detail/${this.props.dataProduct.id}`;
    });
  };

  render() {
    console.log("anjay", this.props.dataProduct);
    console.log("state", this.state.formData);
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
              Edit Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="hidden"
              name="id"
              value={this.props.dataProduct.id}
            ></input>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Product Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={this.props.dataProduct.name}
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
                  <option
                    value={this.props.dataProduct.id_category}
                    selected
                    disabled
                  >
                    {this.props.dataProduct.category}
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
                  <option
                    value={this.props.dataProduct.id_branch}
                    selected
                    disabled
                  >
                    {this.props.dataProduct.branch}
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
                  defaultValue={this.props.dataProduct.stock}
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
                  defaultValue={this.props.dataProduct.price}
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
                  defaultValue={this.props.dataProduct.description}
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
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

// export default modalEdit;
const mapStateToProps = state => {
  return {
    data: state.Products
  };
};

export default connect(mapStateToProps)(modalEdit);

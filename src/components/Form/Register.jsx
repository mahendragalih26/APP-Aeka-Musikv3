import React, { Fragment, Component } from "react";
import { Form, Button, Col, Container, Card, Row } from "react-bootstrap";
import SweetAlert from "sweetalert2";
import { connect } from "react-redux";

import Navbar from "../Navbar/NavbarTop";
import { register } from "../../Publics/Action/auth";

class formRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    let newFormData = { ...this.state.formData };
    const target = e.target;
    const name = target.name;
    const value = target.value;
    newFormData[name] = value;
    this.setState(
      {
        formData: newFormData
      },
      () => {
        console.log(this.state.formData);
      }
    );
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props
      .dispatch(register(this.state.formData))
      .then(() => {
        // alert("Login Berhasil Yepiee");
        SweetAlert.fire({
          title: "Yeayy!",
          text: `Data has been updated`,
          type: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#E28935"
        }).then(() => {
          window.location.href = "/";
        });
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    console.log("State register = ", this.state.formData);
    return (
      <Fragment>
        <Navbar />
        <div className="mt-3"></div>
        <Container className="justify-content-center">
          <Row className="justify-content-md-center">
            <Card style={{ width: "45rem" }} bg="light" border="warning">
              <Form onSubmit={this.handleSubmit}>
                <Card.Header>
                  <h2>
                    Register&nbsp;
                    <i className="fa fa-user" style={{ fontSize: "30px" }}></i>
                  </h2>
                </Card.Header>
                <Card.Body>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="Full name...."
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your Email..."
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password..."
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>
                  </Form.Row>
                </Card.Body>
                <Card.Footer className="text-right">
                  <Button variant="success" type="submit">
                    Daftar Sekarang
                  </Button>
                </Card.Footer>
              </Form>
            </Card>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.Auth
  };
};

export default connect(mapStateToProps)(formRegister);

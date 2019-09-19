import React, { Component, Fragment } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SweetAlert from "sweetalert2";

import { login } from "../../Publics/Action/auth";

class mLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: ""
      },
      token: "",
      id: "",
      name: "",
      level: ""
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
      .dispatch(login(this.state.formData))
      .then(() => {
        this.setState(
          {
            id: this.props.user.dataUser.id,
            name: this.props.user.dataUser.name,
            level: this.props.user.dataUser.level,
            token: this.props.user.dataUser.token
          },
          () => {
            localStorage.setItem("token", this.state.token);
            localStorage.setItem("id", this.state.id);
            localStorage.setItem("name", this.state.name);
            localStorage.setItem("level", this.state.level);
          }
        );
        // alert("Login Berhasil Yepiee");
        SweetAlert.fire({
          title: "Yeayy!",
          text: `Data has been updated`,
          type: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#E28935"
        }).then(() => {
          window.location.reload();
        });
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <Fragment>
        <Modal
          show={this.props.open}
          onHide={this.props.hide}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm" align="center">
              Login APP &nbsp;<i className="fa fa-user"></i>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                <Form.Label>
                  Not have account?&nbsp;
                  <Link
                    style={{ textDecoration: "none", color: "#f9783b" }}
                    to="/register"
                  >
                    <b>SignUp</b>
                  </Link>
                </Form.Label>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.Auth
  };
};

export default connect(mapStateToProps)(mLogin);

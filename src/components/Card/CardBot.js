import React, { Component, Fragment } from "react";
import { Row, Button, Container, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import ModalAdd from "../Modal/modalAdd";

class cardBot extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      role: localStorage.getItem("level") === "admin",
      status_user: localStorage.getItem("token") !== null
    };
  }

  openModalAdd(open) {
    this.setState({ openModal: open });
  }

  render() {
    return (
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
                  onClick={() => this.openModalAdd(true)}
                >
                  Add
                </Button>
              </Row>
            ) : (
              <div className="mt-3"></div>
            )}
          </Fragment>
        ) : (
          <div className="mt-3"></div>
        )}

        {/* Main CARD */}
        <Row>
          {this.props.dataProduct.length > 0 ? (
            this.props.dataProduct.map(product => (
              <Col
                md="3"
                className="mb-3"
                style={{ width: "320px", height: "297px" }}
                key={product.id}
              >
                <Link
                  to={`/detail/${product.id}`}
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
                        src={`/assets/${product.img}.png`}
                        // src="/assets/violin.png"
                      />
                    </Card.Body>
                    <Card.Text align="center">
                      <Card.Title>{product.name}</Card.Title>
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
        <ModalAdd
          open={this.state.openModal}
          hide={() => this.setState({ openModal: false })}
          dataCategory={this.props.dataCategory}
          dataBranch={this.props.dataBranch}
        />
      </Container>
    );
  }
}

export default cardBot;

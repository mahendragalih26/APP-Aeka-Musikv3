import React, { Component } from "react";
import { Row, Button, Container, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import ModalAdd from "./modalAdd";

class cardBot extends Component {
  state = {
    openModal: false
  };

  openModalAdd(open) {
    this.setState({ openModal: open });
  }

  render() {
    return (
      <Container
        className="justify-content-md-center"
        style={{ maxWidth: "95%" }}
      >
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

        {/* Main CARD */}
        <Row>
          {this.props.dataMain.length > 0 ? (
            this.props.dataMain.map(category => (
              <Col
                md="3"
                className="mb-3"
                style={{ width: "320px", height: "297px" }}
                key={category.id}
              >
                <Link
                  to={`/detail/${category.id}`}
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
                        src={`/assets/${category.img}.png`}
                        // src="/assets/violin.png"
                      />
                    </Card.Body>
                    <Card.Text align="center">
                      <Card.Title>{category.name}</Card.Title>
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
          dataProdMax={this.props.dataProdMax}
          dataBranch={this.props.dataBranch}
        />
      </Container>
    );
  }
}

export default cardBot;

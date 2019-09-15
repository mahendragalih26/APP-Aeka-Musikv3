import React, { Component } from "react";
import { Row, Button, Container, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class AllCard extends Component {
  state = {};
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
          >
            Add
          </Button>
        </Row>

        {/* Main CARD */}
        <Row>
          {this.props.data.length > 0 ? (
            this.props.data.map(category => (
              <Col
                md="3"
                className="mb-3"
                style={{ width: "320px", height: "297px" }}
              >
                {/* Mengarah ke  Main Data */}
                <Link
                  to={`/${category.name}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "#F5D372"
                    }}
                    key={category.id}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{
                          position: "absolute",
                          top: "44%",
                          fontSize: "30px",
                          lineHeight: "39px"
                        }}
                      >
                        {category.name}
                      </Card.Title>

                      <Card.Img
                        style={{
                          marginLeft: "44px"
                        }}
                        variant="top"
                        src={`/assets/${category.name}.png`}
                        // src="/assets/violin.png"
                      />
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Data</td>
            </tr>
          )}
        </Row>
      </Container>
    );
  }
}

export default AllCard;

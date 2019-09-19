import React, { Fragment } from "react";
import {
  Navbar,
  Nav,
  Table,
  Container,
  OverlayTrigger,
  Tooltip,
  Row,
  Col
} from "react-bootstrap";

const navCheck = () => {
  return (
    <Fragment>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/assets/icon1.png"
              // width="140px"
              // height="50px"
              className="d-inline-block align-top"
            />
            CART
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link
                onClick={() => this.setState({ openCart: true })}
                className="ml-1"
              >
                {/* <span style={{ fontSize: "50px" }}>&nbsp;&nbsp;Cart</span> */}

                <OverlayTrigger
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-bottom`}>
                      Your <strong>Cart Product</strong>.
                    </Tooltip>
                  }
                >
                  <i
                    className="fa fa-cart-arrow-down"
                    style={{ fontSize: "31px" }}
                  ></i>
                </OverlayTrigger>
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Table striped bordered hover size="sm">
          <thead variant="dark">
            <tr>
              <th>#</th>
              <th>Detail Product</th>
              <th>Qty</th>
              <th>Total Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Container>
                  <Row>
                    <Col md={3}>
                      <img
                        // width={300}
                        // height={300}
                        // className=""
                        src="https://cdn.shopify.com/s/files/1/0256/2398/6281/products/2_25_180x.jpg?v=1568098039"
                        alt="Generic placeholder"
                      />{" "}
                    </Col>
                    <Col md={1}></Col>
                    <Col md={8}>
                      <h5>BARANG GAK GUNA dijual untuk orang kaya saja</h5>
                    </Col>
                  </Row>
                </Container>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>Rp. 200.000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Container>
                  <Row>
                    <Col md={3}>
                      <img
                        // width={300}
                        // height={300}
                        // className=""
                        src="https://cdn.shopify.com/s/files/1/0256/2398/6281/products/2_25_180x.jpg?v=1568098039"
                        alt="Generic placeholder"
                      />{" "}
                    </Col>
                    <Col md={1}></Col>
                    <Col md={8}>
                      <h5>BARANG GAK</h5>
                    </Col>
                  </Row>
                </Container>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>Rp. 200.000</td>
            </tr>

            {/* Total Field */}
            <tr>
              <td colSpan="2"></td>
              <td>
                <b>Total Harga</b>
              </td>
              <td>Rp. 200.000</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

export default navCheck;

import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class NavbarBot extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          className="justify-content-end"
          position="bottom"
          style={{
            backgroundColor: "#F5D372",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            textAlign: "center"
          }}
          variant="dark"
        >
          <span>&copy; 2019 PT Aneka Musik</span>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarBot;

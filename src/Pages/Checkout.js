import React, { Component } from "react";

import Checkout from "../components/Navbar/NavCheckout";

class myCheckout extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="mt-2"></div>
        <Checkout />
      </div>
    );
  }
}

export default myCheckout;

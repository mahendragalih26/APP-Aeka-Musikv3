import React, { Component } from "react";
// import SearchBar from "../components/SearchBar";
import Card from "../components/Card/CardBot";
// import {
//   Row,
//   FormControl,
//   Button,
//   Container,
//   Col,
//   InputGroup
// } from "react-bootstrap";

import { connect } from "react-redux";

import { getBranch } from "../Publics/Action/branch";
import { getProduct } from "../Publics/Action/product";
import { getCategory } from "../Publics/Action/category";

import NavbarTop from "../components/Navbar/NavbarTop";
import NavbarBot from "../components/Navbar/NavbarBot";

class Mains extends Component {
  state = {
    dataProduct: [],
    dataBranch: [],
    dataCategory: [],
    search: ""
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
    await this.props.dispatch(getProduct());
    await this.props.dispatch(getBranch());
    this.setState({
      dataProduct: this.props.data.Products.productsList,
      dataCategory: this.props.data.Categorys.categoryList,
      dataBranch: this.props.data.Branches.branchList
    });
  };

  render() {
    const { dataProduct } = this.state;
    const { dataBranch } = this.state;
    const { dataCategory } = this.state;
    // const filtered = this.state.dataStore.filter(data => data.id === 2);
    // const dataStore = filtered[0];
    console.log("data API = ", this.props.data);
    // console.log("data search = ", this.state.search);
    return (
      <div>
        <NavbarTop />
        <div className="mb-3"></div>
        <Card
          dataProduct={dataProduct}
          dataBranch={dataBranch}
          dataCategory={dataCategory}
        />
        <NavbarBot />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Mains);

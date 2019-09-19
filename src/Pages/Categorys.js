import React, { Component } from "react";
// import SearchBar from "../components/SearchBar";
import CardBar from "../components/Card/Card";

import { connect } from "react-redux";

import { getCategory } from "../Publics/Action/category";
import NavbarTop from "../components/Navbar/NavbarTop";
import NavbarBot from "../components/Navbar/NavbarBot";

class Category extends Component {
  state = {
    dataStore: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
    this.setState({
      dataStore: this.props.data.Categorys.categoryList
    });
  };

  render() {
    const { dataStore } = this.state;
    console.log("data API = ", this.props.data.Categorys.categoryList);
    return (
      <div>
        <NavbarTop />
        {/* <SearchBar /> */}
        <div className="mt-3"></div>
        <CardBar data={dataStore} />
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

export default connect(mapStateToProps)(Category);

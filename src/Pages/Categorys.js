import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import CardBar from "../components/Card";

import { connect } from "react-redux";

import { getCategory } from "../Publics/Action";

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
        <SearchBar />
        <CardBar data={dataStore} />
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

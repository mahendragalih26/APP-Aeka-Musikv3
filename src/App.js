import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Publics/store";

import Categorys from "./Pages/Categorys";
import Mains from "./Pages/Mains";
import Detail from "./Pages/Detail";
import Checkout from "./Pages/Checkout";
import Register from "./components/Form/Register";
import Wishlist from "./components/Card/CardWishlist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route
            exact={true}
            path={"/"}
            render={({ history }) => {
              return <Categorys history={history} />;
            }}
          />
          <Route
            exact={true}
            path={"/violin"}
            render={({ history }) => {
              return <Mains history={history} />;
            }}
          />
          {/* <Route
              exact={true}
              path={"/detail/:id"}
              render={({ history }) => {
                return <Detail history={history} />;
              }}
            /> */}
          <Route path={"/detail/:id"} exact={true} component={Detail} />
          <Route
            exact={true}
            path={"/checkout"}
            render={({ history }) => {
              return <Checkout history={history} />;
            }}
          />

          <Route
            exact={true}
            path={"/register"}
            render={({ history }) => {
              return <Register history={history} />;
            }}
          />

          <Route
            exact={true}
            path={"/wishlist"}
            render={({ history }) => {
              return <Wishlist history={history} />;
            }}
          />

          {/* END */}
          <div className="m-5"></div>
        </Router>
      </Provider>
    );
  }
}

export default App;

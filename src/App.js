import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Publics/store";

import NavbarTop from "./components/Navbar/NavbarTop";
import NavbarBot from "./components/Navbar/NavbarBot";

import Categorys from "./Pages/Categorys";
import Mains from "./Pages/Mains";
import Detail from "./Pages/Detail";

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
          <NavbarTop />
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
          </Router>
          <div className="m-5"></div>
          <NavbarBot />
        </Router>
      </Provider>
    );
  }
}

export default App;

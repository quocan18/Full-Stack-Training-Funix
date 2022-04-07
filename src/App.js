import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponent";
import { STAFFS } from "./shared/staffs";
import { BrowserRouter } from "react-route-dom";
import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

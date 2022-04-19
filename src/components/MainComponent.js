import React, { Component } from "react";
import StaffDetail from "../components/StaffdetailComponent";
import StaffList from "../components/StaffListComponent";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import { Switch, Route } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
    };
  }

  render() {
    const StaffId = ({ match }) => {
      return (
        <StaffDetail
          staff={this.state.staffs.find(
            (staff) => staff.id === +match.params.id
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <StaffList staff={this.state.staffs} />}
          />
          <Route
            exact
            path="/staff"
            component={() => <StaffList staff={this.state.staffs} />}
          />
          <Route
            exact
            path="/staff"
            component={() => <StaffId staff={this.state.staffs} />}
          />
          <Route exact path="/staff/:id" component={StaffId} />
          <Route
            exact
            path="/department"
            component={() => <Department department={this.state.department} />}
          />
          <Route
            path="/salary"
            component={() => <Salary staffList={this.state.staffs} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

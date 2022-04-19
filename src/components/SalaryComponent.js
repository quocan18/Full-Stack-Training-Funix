import React, { useState } from "react";
import {
  Card,
  CardText,
  Jumbotron,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import { Link } from "react-router-dom";

const RenderSalary = ({ staff, salary }) => {
  const formatDecimal = require("format-decimal");
  return (
    <Jumbotron>
      <h2 className="py-3">{staff.name}</h2>
      <p>Mã nhân viên: {staff.id}</p>
      <p>Hệ số lương: {staff.salaryScale}</p>
      <p>Số giờ làm thêm: {staff.overTime}</p>
      <Card className="p-1">
        <CardText>
          Lương : {""}
          {formatDecimal(salary, {
            decimal: ".",
            thousands: ".",
            precision: 0,
          })}{" "}
          VND
        </CardText>
      </Card>
    </Jumbotron>
  );
};

function Salary(props) {
  const [staffList] = useState(props.staffList);
  function salaryCalculate(salaryScale, overTime) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    return salaryScale * basicSalary + overTime * overTimeSalary;
  }

  const staff = staffList.map((staff) => {
    return (
      <div className="col-12 col-md-6 col-lg-4" key={staff.id}>
        <RenderSalary
          staff={staff}
          salary={salaryCalculate(staff.salaryCalculate, staff.overTime)}
        />
      </div>
    );
  });
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/staff"> Nhân viên </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active> Bảng Lương </BreadcrumbItem>
      </Breadcrumb>
      <div className="row">{staff}</div>
    </div>
  );
}

export default Salary;

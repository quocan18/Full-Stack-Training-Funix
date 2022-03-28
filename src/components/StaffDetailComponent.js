import React, {Component} from "react";
import {Card, CardText, CardImg, CardTitle} from 'reactstrap';
import dateFormat from "dateformat";

class StaffDetails extends Component{
    render(props){
        let staff = this.props.staff;

        return(
            <div className="div-img">
                <Card>
                    <CardImg src="{staff.image}" alt="{staff.name}"/>
                    <CardTitle> {staff.name} </CardTitle>
                    <CardText>
                        Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}
                    </CardText>
                    <CardText>
                        Ngày làm việc: {dateFormat(staff.startDate,'dd/mm/yyyy')}
                    </CardText>
                    <CardText>
                        Phòng ban: {staff.department.name}
                    </CardText>
                    <CardText>
                        Số ngày nghỉ phép còn lại: {staff.annualLeave}
                    </CardText>
                    <CardText>
                        Số ngày làm thêm: {staff.overTime}
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default StaffDetails;
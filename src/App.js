import React, {Component} from 'react';
import './App.css';
import StaffList from './components/StaffListComponent';
import {STAFFS} from './shared/staffs';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      staffs : STAFFS,
    };
  }

  render(){
    return (
      <div className='App'>
        <div>
          <div className='Header'>
            <h3 className='heading'>Ứng dụng quản lý nhân sự v1.0</h3>
          </div>
        </div>
        <StaffList staffs={this.state.staffs}/>
      </div>
    );
  }
}

export default App;

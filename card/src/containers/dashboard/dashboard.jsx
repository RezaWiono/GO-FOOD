import React, { Component } from 'react';
import Body from '../../component/body';
import Navbar from '../../component/navbar';


class Dashboard extends Component {
    render() {
    return (
      <div>
      <Navbar/>
      <Body />
      </div>
    );
  }
}

export default Dashboard;

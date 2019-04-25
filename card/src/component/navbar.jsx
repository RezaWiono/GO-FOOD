import React from 'react';
import {
  Navbar,
  NavbarBrand} from 'reactstrap';

export default class navbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">
          <img src="https://lelogama.go-jek.com/ramadhan2018_page_icon/go-food3x.png" width="210" height="50" alt="/"></img></NavbarBrand>
        </Navbar>
      </div>
    );
  }
}